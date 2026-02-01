import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function LandingPage() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'menu', 'about', 'franchise', 'order', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({ top: offsetTop, behavior: 'smooth' });
            setIsMenuOpen(false);
        }
    };

    return (
        <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
            {/* Navigation */}
            <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-sm z-50 animate-in slide-in-from-top duration-500">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center py-4">
                        <div className="flex items-center gap-2 font-serif font-bold text-2xl animate-in fade-in slide-in-from-left duration-600">
                            <img src="/logo.jpg" alt="OH MY BIRYANI" className="h-12 w-auto object-contain" />
                        </div>

                        <ul className="hidden md:flex gap-8 items-center">
                            {['home', 'menu', 'about', 'franchise', 'contact'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item)}
                                        className={`capitalize font-medium transition-all relative group bg-transparent ${activeSection === item ? 'text-orange-600' : 'text-gray-600 hover:text-orange-600'
                                            }`}
                                    >
                                        {item}
                                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-orange-600 transition-all ${activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                                            }`}></span>
                                    </button>
                                </li>
                            ))}
                            <li>
                                <button
                                    onClick={() => scrollToSection('order')}
                                    className="bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-all hover:-translate-y-0.5 hover:shadow-lg relative overflow-hidden group"
                                >
                                    <span className="relative z-10">Order Now</span>
                                    <span className="absolute inset-0 bg-orange-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                                </button>
                            </li>
                        </ul>

                        <button
                            className="md:hidden bg-transparent"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg animate-in slide-in-from-top duration-300">
                        <ul className="flex flex-col items-center gap-4 py-6">
                            {['home', 'menu', 'about', 'franchise', 'contact', 'order'].map((item) => (
                                <li key={item}>
                                    <button
                                        onClick={() => scrollToSection(item)}
                                        className="capitalize font-medium text-gray-600 hover:text-orange-600 transition-colors bg-transparent"
                                    >
                                        {item === 'order' ? 'Order Now' : item}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-100 to-white pt-20">
                {/* Floating Particles */}
                <div className="absolute inset-0 pointer-events-none">
                    {[...Array(5)].map((_, i) => (
                        <div
                            key={i}
                            className={`absolute rounded-full bg-gray-300/30 animate-float-${i + 1}`}
                            style={{
                                width: `${60 + i * 20}px`,
                                height: `${60 + i * 20}px`,
                                top: `${10 + i * 20}%`,
                                left: `${10 + i * 15}%`,
                                animationDelay: `${i * 2}s`,
                            }}
                        ></div>
                    ))}
                </div>

                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                        <div className="space-y-6 animate-in fade-in slide-in-from-left duration-800">
                            <div className="inline-block bg-orange-100 text-orange-800 px-6 py-2 rounded-full text-sm font-semibold animate-in slide-in-from-right duration-600">
                                <span>🔥 Authentic Arcot Style</span>
                            </div>

                            <h1 className="font-serif text-5xl md:text-7xl font-black leading-tight animate-in fade-in slide-in-from-bottom duration-800 delay-200">
                                Traditional<br />
                                <span className="bg-gradient-to-r from-orange-600 via-red-500 to-orange-600 bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
                                    Firewood Biryani
                                </span>
                            </h1>

                            <p className="text-lg text-gray-600 leading-relaxed animate-in fade-in slide-in-from-bottom duration-800 delay-400">
                                Experience the rich flavors of traditional South Indian biryani cooked over firewood,
                                just like in Arcot. Fresh ingredients, authentic spices, and unmatched taste.
                            </p>

                            <div className="flex gap-4 animate-in fade-in slide-in-from-bottom duration-800 delay-600">
                                <button
                                    onClick={() => scrollToSection('order')}
                                    className="bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all hover:-translate-y-1 hover:shadow-xl"
                                >
                                    Order Now
                                </button>
                                <button
                                    onClick={() => scrollToSection('menu')}
                                    className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-600 hover:text-white transition-all hover:-translate-y-1 bg-transparent"
                                >
                                    View Menu
                                </button>
                            </div>

                            <div className="flex gap-8 animate-in fade-in slide-in-from-bottom duration-800 delay-800">
                                {[
                                    { icon: '🏠', text: 'Home Delivery' },
                                    { icon: '🔥', text: 'Firewood Cooked' },
                                    { icon: '⭐', text: 'Premium Quality' },
                                ].map((feature) => (
                                    <div key={feature.text} className="flex items-center gap-2">
                                        <span className="text-2xl">{feature.icon}</span>
                                        <span className="text-sm font-medium">{feature.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-center animate-in fade-in zoom-in duration-1000 delay-300">
                            <div className="relative">
                                <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-orange-500 to-red-600 shadow-2xl flex items-center justify-center animate-pulse-slow">
                                    <svg
                                        viewBox="0 0 100 100"
                                        className="w-48 h-48 text-white"
                                        fill="none"
                                    >
                                        <path d="M35 30H45V70H35V30Z" fill="currentColor" />
                                        <path d="M55 30H65V70H55V30Z" fill="currentColor" />
                                        <circle cx="40" cy="25" r="5" fill="currentColor" />
                                        <circle cx="60" cy="25" r="5" fill="currentColor" />
                                    </svg>
                                </div>
                                <div className="absolute inset-0 rounded-full border-2 border-gray-300 animate-ripple"></div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center animate-in fade-in slide-in-from-bottom duration-1000 delay-1000">
                    <p className="text-sm text-gray-500 mb-2">Scroll Down</p>
                    <div className="w-8 h-12 border-2 border-gray-400 rounded-full mx-auto relative">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full absolute top-2 left-1/2 -translate-x-1/2 animate-scroll-down"></div>
                    </div>
                </div>
            </section>

            {/* Menu Section */}
            <section id="menu" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2">Our Delicacies</p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Signature Dishes</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Traditional Arcot style biryani cooked with love and authenticity</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { name: 'Chicken Biryani', price: '280', description: 'Tender chicken pieces marinated in authentic spices, layered with basmati rice and cooked over firewood', featured: false },
                            { name: 'Mutton Biryani', price: '350', description: 'Premium mutton cooked with traditional Arcot spices and aromatic rice for an unforgettable experience', featured: true },
                            { name: 'Fish Biryani', price: '320', description: 'Fresh fish fillets marinated in coastal spices, cooked with basmati rice in traditional style', featured: false },
                            { name: 'Paneer Biryani', price: '250', description: 'Vegetarian delight with marinated paneer, mixed vegetables, and aromatic spices', featured: false },
                            { name: 'Egg Biryani', price: '220', description: 'Boiled eggs cooked with special spices and layered with fragrant basmati rice', featured: false },
                            { name: 'Family Pack', price: '850', description: 'Large portion perfect for family gatherings - serves 4-6 people', featured: false },
                        ].map((dish, index) => (
                            <div
                                key={dish.name}
                                className={`group relative rounded-2xl p-8 text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${dish.featured
                                    ? 'bg-gradient-to-br from-orange-500 to-red-600 text-white'
                                    : 'border-2 border-gray-200 hover:border-orange-500'
                                    } animate-in fade-in slide-in-from-bottom duration-600`}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {dish.featured && (
                                    <div className="absolute top-5 right-5 bg-white text-orange-600 px-3 py-1 rounded-full text-xs font-bold uppercase">
                                        Most Popular
                                    </div>
                                )}

                                <div className={`w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center transition-transform group-hover:rotate-[360deg] duration-700 ${dish.featured ? 'bg-white' : 'bg-orange-100'
                                    }`}>
                                    <svg viewBox="0 0 100 100" className={`w-12 h-12 ${dish.featured ? 'text-orange-600' : 'text-orange-600'}`} fill="currentColor">
                                        <path d="M35 30H45V70H35V30Z" />
                                        <path d="M55 30H65V70H55V30Z" />
                                        <circle cx="40" cy="25" r="5" />
                                        <circle cx="60" cy="25" r="5" />
                                    </svg>
                                </div>

                                <h3 className={`text-2xl font-serif font-bold mb-3 ${dish.featured ? 'text-white' : 'text-gray-900'}`}>
                                    {dish.name}
                                </h3>
                                <p className={`mb-4 ${dish.featured ? 'text-orange-50' : 'text-gray-600'}`}>
                                    {dish.description}
                                </p>
                                <div className={`text-3xl font-bold mb-6 ${dish.featured ? 'text-white' : 'text-orange-600'}`}>
                                    ₹{dish.price}
                                </div>
                                <button className={`w-full py-3 rounded-lg font-semibold transition-all ${dish.featured
                                    ? 'bg-white text-orange-600 hover:bg-orange-50'
                                    : 'border-2 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent'
                                    }`}>
                                    Add to Cart
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-orange-600 to-red-800 shadow-2xl flex items-center justify-center animate-rotate-slow">
                                    <div className="grid grid-cols-2 gap-8 text-white text-center animate-rotate-reverse-slow">
                                        <div>
                                            <div className="text-5xl font-serif font-black">10+</div>
                                            <div className="text-sm uppercase tracking-wider">Years</div>
                                        </div>
                                        <div>
                                            <div className="text-5xl font-serif font-black">50k+</div>
                                            <div className="text-sm uppercase tracking-wider">Customers</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider">Our Story</p>
                            <h2 className="text-4xl md:text-5xl font-serif font-bold">Preserving Authentic Arcot Tradition</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                For over a decade, we've been bringing the authentic taste of Arcot-style biryani
                                to your table. Our secret? Traditional firewood cooking, premium ingredients, and
                                recipes passed down through generations.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: '🔥', title: 'Firewood Cooking', description: 'Authentic smoky flavor from traditional firewood cooking' },
                                    { icon: '🌿', title: 'Fresh Ingredients', description: 'Only the finest spices and freshest ingredients' },
                                    { icon: '👨‍🍳', title: 'Master Chefs', description: 'Experienced chefs trained in Arcot culinary traditions' },
                                ].map((feature, index) => (
                                    <div
                                        key={feature.title}
                                        className="flex gap-4 p-4 bg-white rounded-xl transition-all hover:translate-x-2 hover:shadow-lg animate-in fade-in slide-in-from-right duration-600"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-1">{feature.title}</h4>
                                            <p className="text-gray-600">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Franchise Section */}
            <section id="franchise" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2">Business Opportunity</p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Franchise Opportunity</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Join our growing family and start your own OH MY BIRYANI outlet</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="grid grid-cols-2 gap-6">
                            {[
                                { icon: '💰', title: 'Minimal Investment', description: 'Start your franchise with minimal capital investment. No hidden costs or royalty fees.' },
                                { icon: '📈', title: 'High Profit Margins', description: 'Benefit from our proven business model with excellent profit margins and quick ROI.' },
                                { icon: '🤝', title: 'Complete Support', description: 'Get complete training, recipe guidance, and ongoing support from our expert team.' },
                                { icon: '📍', title: 'Location Flexibility', description: 'Choose your preferred location - we help you find the perfect spot for your outlet.' },
                            ].map((benefit, index) => (
                                <div
                                    key={benefit.title}
                                    className="p-6 bg-gray-100 rounded-xl transition-all hover:bg-gradient-to-br hover:from-orange-500 hover:to-red-600 hover:text-white hover:-translate-y-2 hover:shadow-xl group animate-in fade-in zoom-in duration-600"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="text-4xl mb-4">{benefit.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                                    <p className="text-sm group-hover:text-gray-300">{benefit.description}</p>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-br from-orange-600 to-red-700 p-8 rounded-2xl shadow-2xl text-white">
                            <h3 className="text-3xl font-serif font-bold mb-6">Express Your Interest</h3>
                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Interest submitted!'); }}>
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:border-white focus:outline-none transition-all"
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:border-white focus:outline-none transition-all"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone Number"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:border-white focus:outline-none transition-all"
                                />
                                <input
                                    type="text"
                                    placeholder="Preferred City"
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:border-white focus:outline-none transition-all"
                                />
                                <textarea
                                    placeholder="Tell us about your interest..."
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:border-white focus:outline-none transition-all"
                                ></textarea>
                                <button
                                    type="submit"
                                    className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg"
                                >
                                    Submit Interest
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Order Section */}
            <section id="order" className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <p className="text-sm text-gray-500 font-semibold uppercase tracking-wider mb-2">Quick & Easy</p>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Place Your Order</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Fresh, hot biryani delivered to your doorstep</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="md:col-span-2 bg-white p-8 rounded-2xl shadow-lg">
                            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Order placed!'); }}>
                                <div className="grid md:grid-cols-2 gap-4">
                                    <input type="text" placeholder="Full Name" required className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all" />
                                    <input type="tel" placeholder="Phone Number" required className="px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all" />
                                </div>
                                <input type="email" placeholder="Email (Optional)" className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all" />
                                <textarea placeholder="Delivery Address" rows={3} required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all"></textarea>

                                <div>
                                    <label className="font-semibold mb-3 block">Select Your Biryani</label>
                                    <div className="space-y-2">
                                        {[
                                            { name: 'Chicken Biryani', price: '280' },
                                            { name: 'Mutton Biryani', price: '350' },
                                            { name: 'Fish Biryani', price: '320' },
                                            { name: 'Paneer Biryani', price: '250' },
                                            { name: 'Egg Biryani', price: '220' },
                                            { name: 'Family Pack', price: '850' },
                                        ].map((dish) => (
                                            <label key={dish.name} className="flex items-center gap-3 p-3 bg-gray-100 rounded-lg hover:bg-gray-200 cursor-pointer transition-all">
                                                <input type="radio" name="biryani" value={dish.name.toLowerCase()} required className="w-4 h-4" />
                                                <span>{dish.name} - ₹{dish.price}</span>
                                            </label>
                                        ))}
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="font-semibold mb-2 block">Quantity</label>
                                        <select required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all">
                                            {[1, 2, 3, 4, 5].map((num) => (
                                                <option key={num} value={num}>{num}</option>
                                            ))}
                                        </select>
                                    </div>
                                    <div>
                                        <label className="font-semibold mb-2 block">Delivery Time</label>
                                        <select required className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-black focus:outline-none transition-all">
                                            <option>ASAP (30-45 mins)</option>
                                            <option>1-2 hours</option>
                                            <option>2-3 hours</option>
                                            <option>Evening (5-7 PM)</option>
                                        </select>
                                    </div>
                                </div>

                                <button type="submit" className="w-full bg-orange-600 text-white py-4 rounded-lg font-semibold hover:bg-orange-700 transition-all hover:-translate-y-1 hover:shadow-xl">
                                    Place Order
                                </button>
                            </form>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold mb-4">📦 Delivery Information</h3>
                                <ul className="space-y-2 text-gray-600">
                                    <li>✓ Delivery within 30-45 minutes</li>
                                    <li>✓ Minimum order: ₹200</li>
                                    <li>✓ Cash on delivery available</li>
                                    <li>✓ Online payment accepted</li>
                                </ul>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold mb-4">📞 Need Help?</h3>
                                <div className="space-y-2 text-gray-600">
                                    <p><strong>Call us:</strong> +91 98765 43210</p>
                                    <p><strong>WhatsApp:</strong> +91 98765 43210</p>
                                    <p><strong>Email:</strong> orders@ohmybiryani.com</p>
                                </div>
                            </div>

                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold mb-4">🛵 Available on</h3>
                                <div className="flex gap-3 mb-4">
                                    <div className="bg-black text-white px-4 py-2 rounded-lg font-semibold">Swiggy</div>
                                    <div className="bg-red-600 text-white px-4 py-2 rounded-lg font-semibold">Zomato</div>
                                </div>
                                <p className="text-sm text-gray-600">Order through your favorite food delivery apps</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                        <div className="space-y-6">
                            <h2 className="text-4xl font-serif font-bold mb-8">Contact Us</h2>

                            {[
                                { icon: '📍', title: 'Address', content: '123 Biryani Street, Arcot\nTamil Nadu, India - 632503' },
                                { icon: '📞', title: 'Phone', content: '+91 98765 43210\n+91 98765 43211' },
                                { icon: '⏰', title: 'Hours', content: 'Mon-Sun: 11:00 AM - 11:00 PM' },
                                { icon: '📧', title: 'Email', content: 'hello@ohmybiryani.com' },
                            ].map((item, index) => (
                                <div
                                    key={item.title}
                                    className="flex gap-4 p-6 bg-gray-100 rounded-xl transition-all hover:translate-x-2 hover:bg-gray-200 animate-in fade-in slide-in-from-left duration-600"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="text-3xl flex-shrink-0">{item.icon}</div>
                                    <div>
                                        <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                        <p className="text-gray-600 whitespace-pre-line">{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="bg-gradient-to-br from-orange-600 to-red-700 p-8 rounded-2xl shadow-2xl text-white">
                            <h3 className="text-3xl font-serif font-bold mb-6">Send us a Message</h3>
                            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
                                <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:border-white focus:outline-none transition-all" />
                                <input type="email" placeholder="Your Email" required className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:border-white focus:outline-none transition-all" />
                                <input type="text" placeholder="Subject" required className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:border-white focus:outline-none transition-all" />
                                <textarea placeholder="Your Message" rows={5} required className="w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-white/20 text-white placeholder-white/70 focus:border-white focus:outline-none transition-all"></textarea>
                                <button type="submit" className="w-full bg-white text-black py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all hover:-translate-y-1 hover:shadow-lg">
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gradient-to-br from-gray-800 to-black text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 mb-8">
                        <div>
                            <div className="flex items-center gap-2 font-serif font-bold text-2xl mb-4">
                                <img src="/logo.jpg" alt="OH MY BIRYANI" className="h-10 w-auto invert brightness-0 grayscale-0 mix-blend-screen" />
                                <span>OH MY BIRYANI</span>
                            </div>
                            <p className="text-gray-400">Authentic Arcot style biryani, crafted with tradition and served with love.</p>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2">
                                {['home', 'menu', 'about', 'franchise'].map((link) => (
                                    <li key={link}>
                                        <button onClick={() => scrollToSection(link)} className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block capitalize">
                                            {link}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-4">Legal</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white transition-all">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-white transition-all">Terms of Service</a></li>
                                <li><a href="#" className="hover:text-white transition-all">Refund Policy</a></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
                            <div className="flex flex-col gap-2">
                                {['Facebook', 'Instagram', 'Twitter'].map((social) => (
                                    <a key={social} href="#" className="text-gray-400 hover:text-white transition-all hover:translate-x-1 inline-block">
                                        {social}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="border-t border-white/10 pt-8 text-center text-gray-400">
                        <p>&copy; 2026 OH MY BIRYANI. All rights reserved.</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
