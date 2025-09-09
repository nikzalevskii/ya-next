import Link from "next/link";

interface Props {
  link: string;
  title: string;
}

export const LinkComponent = ({ link, title }: Props) => {
  return (
    <div>
      <Link className="text-blue-500 hover:underline" href={`/${link}`}>
        {title}
      </Link>
    </div>
  );
};
