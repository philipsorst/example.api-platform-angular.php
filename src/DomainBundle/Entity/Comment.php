<?php

namespace DomainBundle\Entity;

use ApiPlatform\Core\Annotation\ApiProperty;
use ApiPlatform\Core\Annotation\ApiResource;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ApiResource(
 *      attributes={"order"={"created": "DESC"}, "normalization_context"={"groups"={"comment_list"}}}
 * )
 * @ORM\Entity
 *
 * @author Philip Washington Sorst <philip@sorst.net>
 */
class Comment
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     *
     * @var int
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="DomainBundle\Entity\BlogPost", inversedBy="comments")
     * @ORM\JoinColumn(nullable=false)
     *
     * @var BlogPost
     */
    private $blogPost;

    /**
     * @Groups({"comment_list", "blog_post_comments"})
     * @ApiProperty(writable=false)
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(nullable=false)
     *
     * @var User
     */
    private $author;

    /**
     * @Groups({"comment_list", "blog_post_comments"})
     * @ApiProperty(writable=false)
     * @ORM\Column(type="datetime", nullable=false)
     *
     * @var \DateTime
     */
    private $created;

    /**
     * @Groups({"comment_list", "blog_post_comments"})
     * @ORM\Column(type="string", nullable=false)
     *
     * @var string
     */
    private $content;

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
     * @return BlogPost
     */
    public function getBlogPost(): BlogPost
    {
        return $this->blogPost;
    }

    /**
     * @param BlogPost $blogPost
     */
    public function setBlogPost(BlogPost $blogPost)
    {
        $this->blogPost = $blogPost;
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
}
