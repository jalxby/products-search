export const Description = ({ description, title }: { description: string; title: string }) => {
  return (
    <div>
      <div>{title}</div>
      <div>{description}</div>
    </div>
  )
}
