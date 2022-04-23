import React from 'react'
import { useNavigate } from 'react-router-dom';
import profile1 from '../../images/Maskgroup-1.png';
import profile2 from '../../images/Maskgroup.png';
import profile3 from '../../images/Maskgroup-2.png';
import profile4 from '../../images/Maskgroup-3.png';
import profile5 from '../../images/Maskgroup-4.png';
import profile6 from '../../images/Maskgroup-5.png';

const Explore = () => {
    const navigate = useNavigate();

    const handleDashboard = () => {
        navigate('/dashboard');
    }

    const posts = [
        {
            title: 'Enjoying my time in the Bahamas',
            href: '#',
            category: { name: 'Post', href: '#' },
            description: 'Enjoying my time in the Bahamas. Got here yesterday and have been relaxing ocean-side in my villa ever since. Dont even get me started on the food.',
            date: '34 min ago',
            imageUrl: 'https://media.cntraveler.com/photos/5e5ebc01bac8b90008d3bf61/16:9/w_2996,h_1685,c_limit/PostVacationBlues-Tahiti-2020-GettyImages-157477885.jpg',
            author: {
                name: 'Alyssa Thomas',
                href: '#',
                imageUrl: profile3,
            },
        },

        {
            title: 'A Spiritual Safari Experience',
            href: '#',
            category: { name: 'Post', href: '#' },
            description: 'For the past 4 years Ive always dreamt of what it would be like to explore the Safari by myself in a journey to learn more about myself.',
            date: 'yesterday',
            imageUrl: 'https://www.wayfairertravel.com/media/5527/walking_safari_in_east_africa_tanzania.jpg?anchor=center&mode=crop&width=1920&height=1200&rnd=131913185460000000',
            author: {
                name: 'Rick Sanchez',
                href: '#',
                imageUrl: profile5,
            },
        },
        
        {
            title: 'I think Im turning Japanese',
            href: '#',
            category: { name: 'Post', href: '#' },
            description: 'Currently in Japan exploring the culture and walking the peaceful streets during the day.',
            date: 'yesterday',
            imageUrl: 'https://www.goworldtravel.com/wp-content/uploads/2017/02/HIking-in-Japan-Nakasendo-Way-Narai.jpg',
            author: {
                name: 'Ben Dixon',
                href: '#',
                imageUrl: profile1,
            },
        },

        {
            title: 'Im just gonna send it',
            href: '#',
            category: { name: 'Post', href: '#' },
            description: 'My experience here in South America has been one for the books. From white water rafting to crossing long sketchy bridges.',
            date: '2 days ago',
            imageUrl: 'https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/17/2d/df.jpg',
            author: {
                name: 'Andrew Thomas',
                href: '#',
                imageUrl: profile2,
            },
        },

        {
            title: 'In Brazil',
            href: '#',
            category: { name: 'Post', href: '#' },
            description: 'Decided to take a last minute trip to Brazil to explore the south american culture. Heres some advice, dont challenge the locals to a game of soccer.',
            date: '4 days ago',
            imageUrl: 'https://franks-travelbox.com/wp-content/uploads/2017/11/brasilien-salvador-blick-vom-zentrum-des-pelourinho-dem-ehemaligen-sklavenmarkt-auf-die-altstadt-von-salvador-brasilien-vinicius-tupinamba-shutterstock-696x464.jpg',
            author: {
                name: 'Kenzie Manning',
                href: '#',
                imageUrl: profile6,
            },
        },
    ]

    return (
        <div className="w-full h-full flex flex-col">
            <div className="mt-4">
                <div className="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between flex-wrap">

                        <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
                            <img src={profile1} class="w-12 h-12 rounded-full" />
                        </div>

                        <div className="w-0 flex-1 flex items-center">
                        <button
                            type="button"
                            className="-mr-1 flex p-2 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2 font-bold text-white" onClick={handleDashboard}>
                            Back
                        </button>
                        </div>

                    </div>
                </div>
            </div>
            <div className="relative bg-transparent pt-4 px-4 sm:px-6 lg:px-8">
                <div className="absolute inset-0">
                    <div className="h-1/3 sm:h-2/3" />
                </div>
                <div className="relative max-w-7xl mx-auto">
                    <div className="text-center">
                        <h2 className="font-medium text-7xl flex justify-center place-content-center text-white mb-12">Explore</h2>
                        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-100 sm:mt-4">
                            See what's up in the world. TULU users can post blogs freely about their current travel experiences
                        </p>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        <a href={post.category.href} className="hover:underline">
                                        {post.category.name}
                                        </a>
                                    </p>
                                    <a href={post.href} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900">{post.title}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex-shrink-0">
                                        <a href={post.author.href}>
                                        <span className="sr-only">{post.author.name}</span>
                                        <img className="h-10 w-10 rounded-full" src={post.author.imageUrl} alt="" />
                                        </a>
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                        <a href={post.author.href} className="hover:underline">
                                            {post.author.name}
                                        </a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <span>{post.date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore