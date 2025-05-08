import './Section.scss'
import Container from '@/components/layout/Container/Container';
import Title from '@/components/ui/Title/Title';

export default function Section({ title, tag = 'h2', children, className = '' }) {
  return (
    <section className={`section ${className}`}>
      <Container>
        {title && <Title tag={tag}>{title}</Title>}
        {children}
      </Container>
    </section>
  );
}
