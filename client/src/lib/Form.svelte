<script>
    import { createEventDispatcher } from 'svelte'

    let form = {
        code: '',
        options: {
            format: 'CODE128',
            width: 2,
            height: 30,
            displayValue: true,
            fontOptions: '',
            textAlign: 'center',
            textPosition: 'bottom',
            textMargin: 2,
            fontSize: 20,
            background: '#ffffff',
            lineColor: '#000000',
            margin: 10
        }
    }

    const formats = ['CODE128', 'EAN13']

    const dispatch = createEventDispatcher()

    function onSubmit(e) {
        const { options } = form
        const queryParams = []
        for (const key in options) {
            queryParams.push(`${key}=${options[key]}`)
        }
        const url = `https://barcode.lazehang.com/generate/${form.code}?${queryParams.join('&')}`
        dispatch('result', url)
    }
</script>

<form id="generate-form" class="w-full grid grid-cols-2 md:grid-cols-3 gap-4" on:submit|preventDefault={onSubmit}>
    <div class="w-full col-span-2 md:col-span-3">
        <label for="barcodeValue" class="block text-sm font-semibold text-gray-700 pl-1">Barcode value</label>
        <div class="mt-1 w-full">
            <input
                type="text"
                name="barcodeValue"
                class="font-thin px-3 py-2 md:py-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                placeholder="code"
                bind:value={form.code}
            />
        </div>
    </div>
    <div class="w-full text-sm col-span-1">
        <label for="format" class="block text-sm font-semibold text-gray-700 pl-1">Format</label>
        <select
            id="format"
            name="format"
            autocomplete="format"
            class="mt-1 max-w-lg block focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:max-w-xs sm:text-sm border-gray-300 rounded-md px-3 py-3"
            bind:value={form.options.format}
        >
            {#each formats as format, i}
                <option value={format} key={i}>{format}</option>
            {/each}
        </select>
    </div>
    <div class="w-full text-sm col-span-1">
        <label for="width" class="block text-sm font-semibold text-gray-700 pl-1">Width</label>
        <input
            type="number"
            name="width"
            class="mt-1 font-thin px-3 py-2 md:py-3 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
            placeholder="width"
            bind:value={form.options.width}
        />
    </div>
    <button
        type="submit"
        class="col-span-2 md:col-span-3 tracking-wide w-full items-center px-6 py-3 border-2 border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white bg-black hover:bg-yellow-400 hover:text-black focus:outline-none"
        >GENERATE</button
    >
</form>
