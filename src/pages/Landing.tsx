import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../componets/ui/Buttons';
import { BrainIcon } from '../icons/BrainLogo';
import { PlusIcon } from '../icons/PlusIcon';
import { ShareIcon } from '../icons/ShareIcon';
import { NoteIcon } from '../icons/Note';
import { YoutubeIcon } from '../icons/YoutubeIcon';
import { TwitterIcon } from '../icons/TwitterIcon';

export function Landing() {
  const navigate = useNavigate();
  const [currentFeature, setCurrentFeature] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const features = [
    {
      icon: <NoteIcon size="2xl" />,
      title: "Capture Thoughts",
      description: "Add notes, ideas, and insights to your personal knowledge base"
    },
    {
      icon: <YoutubeIcon size="2xl" />,
      title: "Save Videos",
      description: "Store YouTube links and video content for future reference"
    },
    {
      icon: <TwitterIcon size="2xl" />,
      title: "Share Knowledge",
      description: "Share your brain with others and discover new perspectives"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-100">
      {/* Navigation */}
      <nav className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center space-x-3 hover-lift">
          <BrainIcon size="9xl" />
          <h1 className="text-2xl font-bold gradient-text">SecondBrain</h1>
        </div>
        <div className="flex space-x-4">
          <Button 
            variant="secondary" 
            text="Sign In" 
            onClick={() => navigate('/signin')}
            fullWidth={false}
            loading={false}
          />
          <Button 
            variant="primary" 
            text="Get Started" 
            onClick={() => navigate('/signup')}
            fullWidth={false}
            loading={false}
          />
        </div>
      </nav>

      {/* Hero Section */}
      <div className="px-8 py-16 text-center">
        <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-6xl font-bold text-gray-800 mb-6">
            Your Second
            <span className="gradient-text"> Brain</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Capture, organize, and share your thoughts, videos, and insights in one beautiful space. 
            Build your personal knowledge base and connect with like-minded thinkers.
          </p>
          <div className="flex justify-center space-x-4 mb-16">
            <Button 
              variant="primary" 
              text="Start Building" 
              onClick={() => navigate('/signup')}
              startIcon={<PlusIcon size="md" />}
              fullWidth={false}
              loading={false}
            />
            <Button 
              variant="secondary" 
              text="See Demo" 
              onClick={() => navigate('/demo')}
              startIcon={<ShareIcon size="md" />}
              fullWidth={false}
              loading={false}
            />
          </div>
        </div>

        {/* Feature Showcase */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-purple-100 animate-pulse-glow hover-lift">
            <div className="flex items-center justify-center mb-8">
              <div className="text-purple-600 animate-float">
                {features[currentFeature].icon}
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {features[currentFeature].title}
            </h3>
            <p className="text-gray-600 text-lg">
              {features[currentFeature].description}
            </p>
            <div className="flex justify-center mt-6 space-x-2">
              {[0, 1, 2].map((index) => (
                <div
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    currentFeature === index ? 'bg-purple-600' : 'bg-purple-200'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-8 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
            Everything you need to build your knowledge
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:bg-purple-50 transition-all duration-300 hover-lift">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <NoteIcon size="lg" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Smart Notes</h3>
              <p className="text-gray-600">
                Capture your thoughts with rich text formatting and automatic organization
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-purple-50 transition-all duration-300 hover-lift">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <YoutubeIcon size="lg" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Video Library</h3>
              <p className="text-gray-600">
                Save and organize YouTube videos with custom descriptions and tags
              </p>
            </div>
            <div className="text-center p-6 rounded-xl hover:bg-purple-50 transition-all duration-300 hover-lift">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <TwitterIcon size="lg" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Social Sharing</h3>
              <p className="text-gray-600">
                Share your knowledge with others and discover new perspectives
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-8 py-16 bg-gradient-to-r from-purple-600 to-purple-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to build your second brain?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of thinkers, creators, and learners who are already using SecondBrain
          </p>
          <div className="flex justify-center space-x-4 mb-16"> <Button 
            variant="secondary" 
            text="Get Started Free" 
            onClick={() => navigate('/signup')}
            startIcon={<PlusIcon size="md" />}
            fullWidth={false}
            loading={false}
          /></div>
         
        </div>
      </div>

      {/* Footer */}
      <footer className="px-8 py-8 bg-gray-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <BrainIcon size="md" />
            <span className="text-gray-600">© 2024 SecondBrain. All rights reserved.</span>
          </div>
          <div className="flex space-x-6 text-gray-600">
            <a href="#" className="hover:text-purple-600 transition-colors">Privacy</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Terms</a>
            <a href="#" className="hover:text-purple-600 transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
} 