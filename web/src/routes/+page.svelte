<script lang="ts">
  import { base } from "$app/paths";
  let currDate = new Date();
</script>

<div class="w-full md:h-screen flex flex-col md:flex-row">
  <div
    class="min-h-screen md:w-1/2 w-full overflow-auto flex align-middle justify-center bg-[#291b4a] text-[#CCCCCC]"
  >
    <div class="mt-auto mb-auto max-w-[90%]">
      <div class=" p-16">
        <h1
          class="mb-10 uppercase text-[#47bec7] text-lg font-thin tracking-widest font-[ABeeZee]"
        >
          Drew Miller
        </h1>

        <h2
          class="mb-20 xl:text-6xl text-4xl font-semibold leading-[1.5] font-[ABeeZee]"
        >
          Developer. Designer. Techonologist
        </h2>

        <div class="text-[#848d96]">
          <p
            class="my-10 font-[Lora] text-xl font-thin tracking-wider indent-8"
          >
            Hello! I am Pacific Northwest born and raised. So naturally, tech
            become a hobby of mine. I am passionate about building web
            applications, with pet projects always on the table. What else are
            you supposed to do when a platform doesn't offer the feautres you
            want besides build it yourself. Anyways, enough about tech. I also
            love to spend my days playing my electric guitars, riding bikes down
            by the river, marathoning movies all night, and seeing my friends
            and family whenever I can.
          </p>

          <button
            class="bg-[#47bec7] hover:bg-[#35aeb6] text-white font-bold py-2 px-8 rounded my-8"
          >
            <a href="drew-miller-resume.pdf" class="text-black">Résumé</a>
          </button>

          <div
            class="my-10 font-[Arial] font-thin tracking-widest flex flex-col sm:flex-row sm:items-center sm:space-x-8"
          >
            <a
              href="https://github.com/Drew-Miller"
              class="flex items-center space-x-2"
            >
              <img src="github.svg" alt="Github" class="h-5" />
              <p>Github</p>
            </a>

            <a
              href="https://www.linkedin.com/in/drewmiller-software"
              class="flex items-center space-x-2"
            >
              <img src="linkedin.svg" alt="LinkedIn" class="h-5" />
              <p>LinkedIn</p>
            </a>

            <a
              href="mailto:drew.miller.software@gmail.com"
              class="flex items-center space-x-2"
            >
              <img src="envelope-solid.svg" alt="Email" class="h-5" />
              <p>Email</p>
            </a>
          </div>

          <p class="mt-20 font-[Arial] text-[#848d96] text-xs font-thin opacity-40">
            ©{currDate.getFullYear()} Drew Miller
          </p>
        </div>
      </div>
    </div>
  </div>

  <div
    class="my-selfie md:min-h-screen min-h-[80vh] md:w-1/2 w-full"
    style="background-image:url(selfie.png)"
  />
</div>

<style>
  .my-selfie {
    background-size: cover;
    background-position: center;
  }
</style>
