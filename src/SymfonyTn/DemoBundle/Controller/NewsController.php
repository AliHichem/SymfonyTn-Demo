<?php

namespace SymfonyTn\DemoBundle\Controller;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use SymfonyTn\DemoBundle\Entity\News;
use SymfonyTn\DemoBundle\Form\NewsType;

/**
 * News controller.
 *
 */
class NewsController extends Controller
{

    /**
     * Lists all News entities.
     *
     */
    public function indexAction()
    {
        $em       = $this->getDoctrine()->getManager();
        $entities = $em->getRepository('SymfonyTnDemoBundle:News')->findAll();
        return $this->render('SymfonyTnDemoBundle:News:index.html.twig', array(
                    'entities' => $entities,
        ));
    }

    /**
     * Creates a new News entity.
     *
     */
    public function createAction(Request $request)
    {
        $entity = new News();
        $form   = $this->createCreateForm($entity);
        $form->handleRequest($request);

        if ($form->isValid())
        {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            $redis = $this->get('snc_redis.default');
            $redis->publish('socketio_news', json_encode([
                'title'       => $entity->getTitle(),
                'description' => $entity->getDescription(),
            ]));

            return $this->redirect($this->generateUrl('admin_news_show', array('id' => $entity->getId())));
        }

        return $this->render('SymfonyTnDemoBundle:News:new.html.twig', array(
                    'entity' => $entity,
                    'form'   => $form->createView(),
        ));
    }

    /**
     * Creates a form to create a News entity.
     *
     * @param News $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createCreateForm(News $entity)
    {
        $form = $this->createForm(new NewsType(), $entity, array(
            'action' => $this->generateUrl('admin_news_create'),
            'method' => 'POST',
        ));

        $form->add('submit', 'submit', array('label' => 'Create'));

        return $form;
    }

    /**
     * Displays a form to create a new News entity.
     *
     */
    public function newAction()
    {
        $entity = new News();
        $form   = $this->createCreateForm($entity);

        return $this->render('SymfonyTnDemoBundle:News:new.html.twig', array(
                    'entity' => $entity,
                    'form'   => $form->createView(),
        ));
    }

    /**
     * Finds and displays a News entity.
     *
     */
    public function showAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('SymfonyTnDemoBundle:News')->find($id);

        if (!$entity)
        {
            throw $this->createNotFoundException('Unable to find News entity.');
        }

        $deleteForm = $this->createDeleteForm($id);

        return $this->render('SymfonyTnDemoBundle:News:show.html.twig', array(
                    'entity'      => $entity,
                    'delete_form' => $deleteForm->createView(),));
    }

    /**
     * Displays a form to edit an existing News entity.
     *
     */
    public function editAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('SymfonyTnDemoBundle:News')->find($id);

        if (!$entity)
        {
            throw $this->createNotFoundException('Unable to find News entity.');
        }

        $editForm   = $this->createEditForm($entity);
        $deleteForm = $this->createDeleteForm($id);

        return $this->render('SymfonyTnDemoBundle:News:edit.html.twig', array(
                    'entity'      => $entity,
                    'edit_form'   => $editForm->createView(),
                    'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Creates a form to edit a News entity.
     *
     * @param News $entity The entity
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createEditForm(News $entity)
    {
        $form = $this->createForm(new NewsType(), $entity, array(
            'action' => $this->generateUrl('admin_news_update', array('id' => $entity->getId())),
            'method' => 'PUT',
        ));

        $form->add('submit', 'submit', array('label' => 'Update'));

        return $form;
    }

    /**
     * Edits an existing News entity.
     *
     */
    public function updateAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('SymfonyTnDemoBundle:News')->find($id);

        if (!$entity)
        {
            throw $this->createNotFoundException('Unable to find News entity.');
        }

        $deleteForm = $this->createDeleteForm($id);
        $editForm   = $this->createEditForm($entity);
        $editForm->handleRequest($request);

        if ($editForm->isValid())
        {
            $em->flush();

            return $this->redirect($this->generateUrl('admin_news_edit', array('id' => $id)));
        }

        return $this->render('SymfonyTnDemoBundle:News:edit.html.twig', array(
                    'entity'      => $entity,
                    'edit_form'   => $editForm->createView(),
                    'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Deletes a News entity.
     *
     */
    public function deleteAction(Request $request, $id)
    {
        $form = $this->createDeleteForm($id);
        $form->handleRequest($request);

        if ($form->isValid())
        {
            $em     = $this->getDoctrine()->getManager();
            $entity = $em->getRepository('SymfonyTnDemoBundle:News')->find($id);

            if (!$entity)
            {
                throw $this->createNotFoundException('Unable to find News entity.');
            }

            $em->remove($entity);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('admin_news'));
    }

    /**
     * Creates a form to delete a News entity by id.
     *
     * @param mixed $id The entity id
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($id)
    {
        return $this->createFormBuilder()
                        ->setAction($this->generateUrl('admin_news_delete', array('id' => $id)))
                        ->setMethod('DELETE')
                        ->add('submit', 'submit', array('label' => 'Delete'))
                        ->getForm()
        ;
    }

}
