interface Props {
  message: string
}

export function ErrorMessage({ message }: Props) {
  return <p>Error: {message}</p>
}
