<?php

namespace DomainBundle\Entity;

use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use ApiPlatform\Core\Annotation\ApiSubresource;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity
 * @ApiResource(
 *     attributes={"order"={"created": "DESC"},
 *     "normalization_context"={"groups"={"blog_post_list"}},
 *     "filters"={"blog_post.group_filter"}},
 *     itemOperations={
 *          "get"={"method"="GET", "normalization_context"={"groups"={"blog_post_detail"}}}
 *     }
 *  )
 *
 * @author Philip Washington Sorst <philip@sorst.net>
 */
class BlogPost
{
    /**
     * @Groups({"blog_post_list", "blog_post_detail"})
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     *
     * @var int
     */
    private $id;

    /**
     * @Groups({"blog_post_list", "blog_post_detail"})
     * @ApiProperty(writable=false)
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(nullable=false)
     *
     * @var User
     */
    private $author;

    /**
     * @Groups({"blog_post_list", "blog_post_detail"})
     * @ApiProperty(writable=false)
     * @ORM\Column(type="datetime", nullable=false)
     *
     * @var \DateTime
     */
    private $created;

    /**
     * @Groups({"blog_post_list", "blog_post_detail"})
     * @ORM\Column(type="string", nullable=false)
     *
     * @var string
     */
    private $title;

    /**
     * @Groups({"blog_post_detail"})
     * @ORM\Column(type="string", nullable=false)
     *
     * @var string
     */
    private $content;

    /**
     * @Groups({"blog_post_comments"})
     * @ApiSubresource()
     * @ORM\OneToMany(targetEntity="Comment", mappedBy="blogPost")
     *
     * @var Collection
     */
    private $comments;

    public function __construct()
    {
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @return User
     */
    public function getAuthor(): User
    {
        return $this->author;
    }

    /**
     * @param User $author
     */
    public function setAuthor(User $author)
    {
        $this->author = $author;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @return \DateTime
     */
    public function getCreated(): \DateTime
    {
        return $this->created;
    }

    /**
     * @param \DateTime $created
     */
    public function setCreated(\DateTime $created)
    {
        $this->created = $created;
    }

    /**
     * @param string $title
     */
    public function setTitle(string $title)
    {
        $this->title = $title;
    }

    /**
     * @return string
     */
    public function getContent(): string
    {
        return $this->content;
    }

    /**
     * @param string $content
     */
    public function setContent(string $content)
    {
        $this->content = $content;
    }

    /**
     * @return Collection
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }
}
