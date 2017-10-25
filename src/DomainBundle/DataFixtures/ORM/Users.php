<?php

namespace DomainBundle\DataFixtures\ORM;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Common\Persistence\ObjectManager;
use DomainBundle\Entity\User;
use Faker\Factory;

/**
 * @author Philip Washington Sorst <philip@sorst.net>
 */
class Users extends Fixture
{
    const ADMIN = 'user-admin';
    const DEFAULT = 'user-default';

    /**
     * {@inheritdoc}
     */
    public function load(ObjectManager $manager)
    {
        $fakeGenerator = Factory::create();
        $userManager = $this->container->get('fos_user.user_manager');

        $user = $userManager->createUser();
        $user->setUsername('admin');
        $user->setEmail('admin@example.com');
        $user->setPlainPassword('admin');
        $user->setEnabled(true);
        $user->addRole('ROLE_ADMIN');
        $userManager->updateUser($user);
        $this->addReference(self::ADMIN, $user);

        $user = $userManager->createUser();
        $user->setUsername('user');
        $user->setEmail('user@example.com');
        $user->setPlainPassword('user');
        $user->setEnabled(true);
        $userManager->updateUser($user);
        $this->addReference(self::DEFAULT, $user);

        for ($i = 0; $i < 50; $i++) {
            /** @var User $user */
            $user = $userManager->createUser();
            $username = $fakeGenerator->userName;
            $user->setUsername($username);
            $user->setFullname($fakeGenerator->name());
            $user->setEmail($fakeGenerator->email);
            $user->setPlainPassword($username);
            $user->setEnabled(true);
            $userManager->updateUser($user);
            $this->addReference('user-' . $i, $user);
        }

        $manager->flush();
    }
}
