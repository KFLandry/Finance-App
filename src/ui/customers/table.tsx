export default function PostsTable(props: { posts: any[] }) {
  return (
    <div className="size-full mt-6 flow-root">
      <div className="min-w-full align-middle">
        <div className="rounded-lg bg-gray-50 p-2 md:pt-0">
          <table className="hidden min-w-full text-gray-900 md:table">
            <thead className="rounded-lg text-left text-sm font-normal">
              <tr>
                <th scope="col" className="px-3 py-5 font-medium">
                  Id
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  title
                </th>
                <th scope="col" className="px-3 py-5 font-medium">
                  body
                </th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {props &&
                props.posts.map((post) => (
                  <tr
                    key={post.id}
                    className="w-full border-b py-3 text-sm last-of-type:border-none hover:bg-blue-400 [&:first-child>td:first-child]:rounded-tl-lg [&:first-child>td:last-child]:rounded-tr-lg [&:last-child>td:first-child]:rounded-bl-lg [&:last-child>td:last-child]:rounded-br-lg"
                  >
                    <td className="whitespace-nowrap px-3 py-3 text-center">
                      {post.id}
                    </td>
                    <td className="px-3 py-3">
                      <p className="text-justify w-44 line-clamp-2">
                        {post.title}
                      </p>
                    </td>
                    <td className="px-3 py-3">
                      <p className="text-justify w-96 line-clamp-2">
                        {post.body}
                      </p>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
