export default function Photo({link}:{link:string}){
  return (
    <img
      src={link}
      className="rounded mt-3"
    />
  )
}