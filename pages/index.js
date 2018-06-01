import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <h1>Hello world</h1>
      <Link href="/browser-router-example">
        <a>Browser Router Example</a>
      </Link>
      <br />
      <Link href="/memory-router-example">
        <a>Memory Router Example</a>
      </Link>
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </div>
  );
}

export default Index;