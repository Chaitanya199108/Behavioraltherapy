import { useParams, useNavigate } from 'react-router-dom';
import { CalendarDays, Clock, User, ArrowLeft } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { blogPosts } from '../data/mockData';

export default function BlogPost() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const post = blogPosts.find(post => post.id === id);

  if (!post) {
    return (
      <div className="container py-16 text-center">
        <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
        <Button onClick={() => navigate('/blog')}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
        </Button>
      </div>
    );
  }

  return (
    <article className="container py-8 max-w-4xl">
      <Button
        variant="ghost"
        className="mb-8"
        onClick={() => navigate('/blog')}
      >
        <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
      </Button>

      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-4">
          <Badge variant="secondary">{post.category}</Badge>
          <h1 className="text-4xl font-bold">{post.title}</h1>
          
          <div className="flex items-center gap-4 text-muted-foreground">
            <div className="flex items-center gap-1">
              <User className="w-4 h-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center gap-1">
              <CalendarDays className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <img
          src={post.image}
          alt={post.title}
          className="w-full aspect-video object-cover rounded-lg"
        />

        {/* Content */}
        <div className="prose prose-blue max-w-none">
          {post.content.split('\n').map((paragraph, index) => (
            <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pt-4">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}