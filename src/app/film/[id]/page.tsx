interface Props {
  params: {
    id: string;
  };
}

export default async function Film({ params }: Props) {
  const { id } = params;

  await new Promise((resolve) => setTimeout(resolve, 2000));
  return <div className="p-8">Film {id}</div>;
}
