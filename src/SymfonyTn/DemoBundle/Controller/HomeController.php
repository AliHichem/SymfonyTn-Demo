<?php

namespace SymfonyTn\DemoBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

Class HomeController extends Controller
{

    public function indexAction()
    {
        $em          = $this->getDoctrine()->getManager();
        $latest_news = $em->getRepository('SymfonyTnDemoBundle:News')->findBy([], ['created' => 'desc'], 1);
        $news        = empty($latest_news) ? NULL : $latest_news[0];
        return $this->render('SymfonyTnDemoBundle:Home:index.html.twig', ['news' => $news]);
    }

}
