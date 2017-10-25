<?php

namespace DomainBundle\Entity;

use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use FOS\UserBundle\Model\User as BaseUser;
use FOS\UserBundle\Model\UserInterface;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity
 * @ApiResource(attributes={
 *     "normalization_context"={"groups"={"user", "user-read"}},
 *     "denormalization_context"={"groups"={"user", "user-write"}}
 * })
 *
 * @author Philip Washington Sorst <philip@sorst.net>
 */
class User extends BaseUser
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="AUTO")
     * @Groups({"user-read"})
     *
     * @var int
     */
    protected $id;

    /**
     * @Groups({"user"})
     *
     * @var string
     */
    protected $email;

    /**
     * @Groups({"user","blog_post_list","blog_post_detail", "comment_list"})
     * @ORM\Column(type="string", length=255, nullable=true)
     *
     * @var string
     */
    protected $fullname;

    /**
     * @Groups({"user-write"})
     *
     * @var string
     */
    protected $plainPassword;

    /**
     * @Groups({"user"})
     *
     * @var string
     */
    protected $username;

    /**
     * @Groups({"user-read"})
     *
     * @var array
     */
    protected $roles;

    public function setFullname($fullname)
    {
        $this->fullname = $fullname;

        return $this;
    }

    public function getFullname()
    {
        return $this->fullname;
    }

    public function isUser(UserInterface $user = null)
    {
        return $user instanceof self && $user->id === $this->id;
    }
}
