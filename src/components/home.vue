<script setup lang="ts">
import emailIconUrl from '../assets/email.svg'
import linkedinIconUrl from '../assets/linkedin.svg'
import telegramIconUrl from '../assets/telegram.svg'
import githubIconUrl from '../assets/github.svg'
import twitterIconUrl from '../assets/twitter.svg'
import mePhotoUrl from '../assets/me.jpg'



const name = 'Carlos Paredes Robles'

const contact = {
  email: {
    name: 'carlos@paredesrobles.com',
    url: 'mailto:carlos@paredesrobles.com'
  },
  telegram: {
    name: '@cparedesr',
    url: 'https://t.me/cparedesr'
  },
  github: {
    name: 'CarloGauss33',
    url: 'https://github.com/CarloGauss33'
  },
  linkedin: {
    name: 'Carlos Paredes',
    url: 'https://www.linkedin.com/in/cparedesr-cl'
  },
  twitter: {
    name: '@CarloGauss33',
    url: 'https://twitter.com/CarloGauss33'
  }
}
</script>

<template>
  <div class="w-full rounded-lg bg-white px-4 py-6 flex flex-col items-center shadow-lg">
    <h1 class="text-3xl font-bold text-gray-800 md:mb-8 text-center">{{ name }}</h1>
    <div
      class="flex flex-col md:flex-row w-full md:px-24 items-center md:items-start mb-4 md:mb-16">

      <img :src="mePhotoUrl" class="w-36 h-36 mb-4 md:mb-0 md:w-48 md:h-48 rounded-xl shadow-lg md:mr-12" />
      <div class="flex flex-col gap-2">
        <p class="text-gray-800 text-justify md:text-left">
          I'm a engineer from Chile, Bitcoin Maximalist and Cypherpunk.
          Currently working at <a href="https://www.grupomok.com/" class="font-bold text-rose-700">MOK Labs</a> as a SSE and Tech Lead.
        </p>
        <p class="text-gray-800 text-justify md:text-left">
          Additionally, I am a student at the Pontificia Universidad Católica de Chile, where I currently lead the team for the course
          IIC2133 - Data Structures and Algorithms.
        </p>
        <div class="p-2 flex flex-col justify-start items-start w-full gap-2">
          <h3 class="text-gray-800 text-sm md:text-base font-bold mr-2">Some of my projects (Check out github for more):</h3>
          <a href="https://scan.cparedesr.com" class="bg-purple-400 w-full text-white px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-500">
              ExamScanner - PDF Generator
          </a>
          <a href="https://pdf.cparedesr.com" class="bg-purple-400 w-full text-white px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-500">
              CPDF - PDF editor
          </a>
          <a href="https://blog.cparedesr.com/" class="bg-purple-400 w-full text-white px-4 py-2 rounded-lg shadow-lg hover:bg-yellow-500">
            Blog - Personal blog
          </a>
        </div>
        <p class="text-gray-800 text-justify text-sm md:text-left">
          Key interests: Bitcoin, Algorithms, Privacy, Selfhosting, Startups, International Relationships, and more.
        </p>
      </div>
    </div>


    <div class="grid grid-cols-2 md:grid-cols-5 md:px-12 gap-8 md:gap-8">
      <a :href="contact.github.url" class="transition ease-in-out delay-150 flex flex-row gap-1 items-center hover:-translate-y-1 hover:scale-110 duration-150">
        <img :src="githubIconUrl" class="w-8 h-8" />
        <span class="text-gray-800 text-sm">{{ contact.github.name }}</span>
      </a>

      <a :href="contact.linkedin.url" class="transition ease-in-out delay-150 flex flex-row gap-1 items-center hover:-translate-y-1 hover:scale-110 duration-150">
        <img :src="linkedinIconUrl" class="w-8 h-8" />
        <span class="text-gray-800 text-sm">{{ contact.linkedin.name }}</span>
      </a>

      <a :href="contact.telegram.url" class="transition ease-in-out delay-150 flex flex-row gap-1 items-center hover:-translate-y-1 hover:scale-110 duration-150">
        <img :src="telegramIconUrl" class="w-8 h-8" />
        <span class="text-gray-800 text-sm">{{ contact.telegram.name }}</span>
      </a>


      <a :href="contact.twitter.url" class="transition ease-in-out delay-150 flex flex-row gap-1 items-center hover:-translate-y-1 hover:scale-110 duration-150">
        <img :src="twitterIconUrl" class="w-8 h-8" />
        <span class="text-gray-800 text-sm">{{ contact.twitter.name }}</span>
      </a>

      <a :href="contact.email.url" class="md:col-span-1 col-span-2 transition ease-in-out delay-150 flex flex-row gap-1 items-center hover:-translate-y-1 hover:scale-110 duration-150">
        <img :src="emailIconUrl" class="w-8 h-8" />
        <span class="text-gray-800 text-sm">{{ contact.email.name }}</span>
      </a>
    </div>
  </div>
</template>
