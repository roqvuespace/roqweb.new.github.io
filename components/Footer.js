import { define } from "../roqvue.js"

define("Footer", () => {
  const footer = document.createElement("footer")
  footer.className = "bg-card border-t border-border py-12 bg-gray-900"

  footer.innerHTML = `
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Left section -->
        <div class="col-span-1 md:col-span-2">
          <div class="flex items-center space-x-2 mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M4 20l16-8-16-8v6l10 2-10 2v6z"/>
            </svg>
            <span class="text-2xl font-bold text-white">Roqvue.space</span>
          </div>
          <p class="text-white mb-4 max-w-md">
            Pioneering the future of space technology with innovative rockets, drone ships, and satellite solutions
            for global connectivity.
          </p>
          <div class="flex space-x-4">
            <a href="https://twitter.com" target="_blank" class="px-3 py-1 border rounded-md text-white text-sm hover:bg-muted transition">Twitter</a>
            <a href="https://linkedin.com" target="_blank" class="px-3 py-1 border rounded-md text-white text-sm hover:bg-muted transition">LinkedIn</a>
            <a href="https://youtube.com" target="_blank" class="px-3 py-1 border rounded-md text-white text-sm hover:bg-muted transition">YouTube</a>
          </div>
        </div>

        <!-- Technologies -->
        <div>
          <h3 class="font-semibold text-white mb-4">Technologies</h3>
          <ul class="space-y-2 text-white">
            <li><a href="/technology#rockets" class="hover:text-primary transition-colors">Rockets</a></li>
            <li><a href="/technology#ships" class="hover:text-primary transition-colors">Drone Ships</a></li>
            <li><a href="/technology#satellites" class="hover:text-primary transition-colors">Satellites</a></li>
            <li><a href="/technology#isp" class="hover:text-primary transition-colors">ISP Services</a></li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="font-semibold text-white mb-4">Company</h3>
          <ul class="space-y-2 text-white">
            <li><a href="/about" class="hover:text-primary transition-colors">About</a></li>
            <li><a href="/careers" class="hover:text-primary transition-colors">Careers</a></li>
            <li><a href="/news" class="hover:text-primary transition-colors">News</a></li>
            <li><a href="/contact" class="hover:text-primary transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <!-- Bottom -->
      <div class="border-t border-border mt-8 pt-8 text-center text-white">
        <p>&copy; 2025 Roqvue.space. All rights reserved. Reaching for the stars, one launch at a time.</p>
      </div>
    </div>
  `

  return footer
})
