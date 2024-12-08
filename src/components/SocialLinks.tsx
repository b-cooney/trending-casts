import { Twitter, Link } from 'lucide-react'

const SocialLinks = () => {
  const links = [
    {
      name: 'Farcaster',
      icon: <Link className="w-5 h-5" />,
      url: 'https://warpcast.com/~/channel/trending-casts',
    },
    {
      name: 'Twitter',
      icon: <Twitter className="w-5 h-5" />,
      url: 'https://x.com/trending_casts',
    },
    {
      name: 'Highlight',
      icon: <Link className="w-5 h-5" />,
      url: '#',
    },
    {
      name: 'Hypersub',
      icon: <Link className="w-5 h-5" />,
      url: '#',
    }
  ]

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-8">Connect With Us</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {links.map((link) => (
          <a
            key={link.name}
            href={link.url}
            className="bg-gray-800 hover:bg-gray-700 flex items-center justify-center gap-3 px-6 py-4 rounded-lg transition-all duration-200 border border-gray-700 hover:border-gray-600 group"
          >
            <span className="text-gray-400 group-hover:text-white transition-colors duration-200">
              {link.icon}
            </span>
            <span className="font-medium">{link.name}</span>
          </a>
        ))}
      </div>
    </div>
  )
}

export default SocialLinks
