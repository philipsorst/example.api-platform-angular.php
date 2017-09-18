<?php

namespace DomainBundle\DataFixtures\ORM;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use DomainBundle\Entity\BlogPost;
use DomainBundle\Entity\Comment;
use DomainBundle\Entity\User;
use Faker\Factory;

/**
 * @author Philip Washington Sorst <philip@sorst.net>
 */
class BlogPosts extends Fixture
{
    /**
     * {@inheritdoc}
     */
    public function load(ObjectManager $manager)
    {
        $fakeGenerator = Factory::create();
        $admin = $this->getReference(Users::ADMIN);

        for ($i = 0; $i < 200; $i++) {
            /** @var User $user */
            $user = $this->getReference('user-' . $fakeGenerator->numberBetween(0, 49));
            $blogPost = new BlogPost();
            $blogPost->setAuthor($user);
            $blogPostCreated = $fakeGenerator->dateTimeBetween();
            $blogPost->setCreated($blogPostCreated);
            $blogPost->setTitle($fakeGenerator->words(5, true));
            $blogPost->setContent($fakeGenerator->paragraphs(5, true));
            $manager->persist($blogPost);

            $numComments = $fakeGenerator->numberBetween(0, 50);
            for ($j = 0; $j < $numComments; $j++) {
                /** @var User $commentUser */
                $commentUser = $this->getReference('user-' . $fakeGenerator->numberBetween(0, 49));
                $comment = new Comment();
                $comment->setBlogPost($blogPost);
                $comment->setCreated($fakeGenerator->dateTimeBetween($blogPostCreated, 'now'));
                $comment->setAuthor($commentUser);
                $comment->setContent($fakeGenerator->paragraphs(2, true));
                $manager->persist($comment);
            }
        }

        $manager->flush();
    }

    /**
     * {@inheritdoc}
     */
    public function getDependencies()
    {
        return [Users::class];
    }
}
