<script >
  import Config from './Config.svelte'	
</script>

<nav class="flex bg-white fixed top-0 inset-x-0 z-40 h-16 items-center" role="navigation">
  <div class="container mx-auto p-4 flex flex-wrap items-center md:flex-no-wrap">
    
    <div class="mr-4 md:mr-8">
      <a href="/">
        <span class="font-bold font-serif font-mono text-xl text-orange-600">Notificon</span>
      </a>
    </div>

    <div class="w-auto flex-grow flex items-center">
      <ul class="flex flex-no-wrap items-center ml-auto border-0 ">
        <li>
          <a href="/config" class="px-3 py-1 text-gray-800 font-semibold">Perfil</a>
        </li>
      </ul>
    </div>

  </div>
</nav>
