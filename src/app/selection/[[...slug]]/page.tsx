interface Props {
  params: {
    slug: string[];
  };
}

export default function Selection({ params }: Props) {
  const { slug } = params;
  return (
    <div className="p-8">
      Selection {slug && slug.join("/")}
      <ul>
        {slug &&
          slug.map((segment, idx) => (
            <li key={idx}>
              {segment}
              {idx < slug.length - 1 && " > "}
            </li>
          ))}
      </ul>
    </div>
  );
}
