import React from 'react';
import { ChevronRight } from 'lucide-react';
import { FeatureLayout } from './FeatureLayout';

export function FeatureTalentDiscovery() {
  return (
    <FeatureLayout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Talent Discovery</h1>
          
          <div className="prose prose-lg">
            <p className="text-xl text-gray-600 mb-8">
              Our AI-powered talent discovery system uses advanced algorithms to identify your child's natural abilities, learning styles, and potential areas of excellence.
            </p>

            <div className="bg-blue-50 p-8 rounded-xl mb-12">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Key Benefits</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Comprehensive assessment across multiple intelligence domains</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Early identification of strengths and areas for development</span>
                </li>
                <li className="flex items-start">
                  <ChevronRight className="w-6 h-6 text-blue-600 mr-2 flex-shrink-0 mt-1" />
                  <span>Data-driven insights for educational planning</span>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-xl rounded-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80" 
                alt="Child learning"
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-4">How It Works</h3>
                <ol className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 flex-shrink-0">1</span>
                    <p>Initial assessment through interactive AI-powered activities</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 flex-shrink-0">2</span>
                    <p>Continuous monitoring of learning patterns and preferences</p>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-semibold mr-4 flex-shrink-0">3</span>
                    <p>Regular updates and recommendations based on progress</p>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FeatureLayout>
  );
}