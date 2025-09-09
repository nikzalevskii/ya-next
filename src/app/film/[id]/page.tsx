interface Props {
  params: {
    id: string;
  };
}

export default function Film({ params }: Props) {
  const { id } = params;
  return <div className="p-8">Film {id}</div>;
}
