<script>
</script>

<main class="bg-gray-200 min-h-screen w-full flex flex-col justify-around">
    <div class="relative py-10 overflow-hidden h-full">
        <div class="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
            <div class="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
                <svg
                    class="absolute top-12 left-full transform translate-x-32"
                    width="404"
                    height="384"
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                        <pattern
                            id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
                </svg>
                <svg
                    class="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
                    width="404"
                    height="384"
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                        <pattern
                            id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
                </svg>
                <svg
                    class="absolute bottom-12 left-full transform translate-x-32"
                    width="404"
                    height="384"
                    fill="none"
                    viewBox="0 0 404 384"
                >
                    <defs>
                        <pattern
                            id="d3eb07ae-5182-43e6-857d-35c643af9034"
                            x="0"
                            y="0"
                            width="20"
                            height="20"
                            patternUnits="userSpaceOnUse"
                        >
                            <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                        </pattern>
                    </defs>
                    <rect width="404" height="384" fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
                </svg>
            </div>
        </div>
        <div class="relative px-4 sm:px-6 lg:px-8">
            <div class="text-lg max-w-prose mx-auto space-y-4">
                <div class="flex justify-between space-x-4">
                    <h1 class="block">
                        <span class="block text-base text-yellow-400 font-semibold tracking-wide uppercase">Online</span
                        >
                        <span
                            class="mt-2 block text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                            >Barcode Generator</span
                        >
                    </h1>
                    <a href="https://github.com/lazehang/getbarcode" class="block cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.0"
                            width="32"
                            height="32"
                            viewBox="0 0 64.000000 64.000000"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <g
                                transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                                fill="#000000"
                                stroke="none"
                            >
                                <path
                                    d="M245 631 c-92 -24 -173 -91 -216 -176 -34 -69 -34 -187 0 -262 26 -58 103 -136 156 -159 49 -20 55 -18 55 21 0 33 -2 35 -35 35 -35 0 -42 5 -90 66 -44 56 -24 61 34 9 45 -41 73 -44 96 -12 14 21 14 22 -7 30 -57 21 -86 40 -101 67 -22 36 -23 128 -1 158 8 12 12 27 9 32 -10 16 5 70 18 70 7 0 24 -6 38 -14 32 -16 202 -15 242 2 16 7 32 12 37 12 11 0 23 -56 15 -70 -3 -5 1 -20 9 -32 22 -31 21 -126 -1 -158 -24 -35 -43 -48 -86 -60 -32 -9 -36 -13 -27 -30 5 -10 10 -46 10 -79 0 -35 4 -61 10 -61 55 0 167 96 201 173 34 75 34 193 0 262 -32 64 -93 124 -155 153 -53 25 -160 37 -211 23z"
                                />
                            </g>
                        </svg>
                    </a>
                </div>

                <p class="mt-6 text-xl text-gray-500 leading-8">
                    Online barcode generator using url using <a href="https://github.com/lindell/JsBarcode#readme"
                        >JsBarcode</a
                    >.
                </p>

                <i class="text-xs md:text-sm"> https://barcode.lazehang.com/generate/:value </i>

                <div class="flex flex-col items-center space-y-4 w-full mx-auto mt-16">
                    <form
                        id="generate-form"
                        class="w-full flex flex-col md:flex-row space-y-2 items-center md:items-end md:space-x-2 md:space-y-0"
                    >
                        <div class="w-full">
                            <label for="generate-form" class="block text-sm font-semibold text-gray-700 pl-1">Barcode value</label>
                            <div class="mt-1 w-full">
                                <input
                                    type="text"
                                    name="barcodeValue"
                                    class="font-thin px-3 py-2 md:py-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                                    placeholder="code"
                                />
                            </div>
                        </div>
                        <button
                            type="submit"
                            class="tracking-wide w-full md:w-auto items-center px-6 py-3 border-2 border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-black hover:bg-yellow-400 hover:text-black focus:outline-none"
                            >GENERATE</button
                        >
                    </form>
                    <div class="clipboard flex justify-between space-x-2 items-center w-full">
                        <input
                            id="result-url"
                            type="text"
                            class="block px-3 py-2 shadow-sm w-full sm:text-sm border-gray-300 rounded-md"
                        />
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="copythis"
                            class="h-6 w-6 cursor-pointer block"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
                            />
                        </svg>
                    </div>
                    <div id="result" class="flex justify-center w-full" />
                </div>
            </div>
        </div>
    </div>

    <footer class="text-center p-5 text-sm mt-auto">
        built by <a class="text-bold italic underline" href="https://www.lazehang.com">lazehang</a>
    </footer>
</main>
