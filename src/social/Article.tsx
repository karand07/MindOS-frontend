export default function Article({link}:{link:string}){

  const domain = new URL(link).hostname

  return (
    <a href={link} target="_blank">
      <div className="border rounded p-3 mt-3 hover:bg-gray-50">
        <p className="font-medium">{domain}</p>
        <p className="text-sm text-gray-500">Open article →</p>
      </div>
    </a>
  )
}