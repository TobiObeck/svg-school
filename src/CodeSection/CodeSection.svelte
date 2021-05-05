<script>
  import { onMount, createEventDispatcher } from 'svelte'
	import CodeMirror from '@joshnuss/svelte-codemirror'
  import 'codemirror/mode/xml/xml.js'

  const UPDATE_INTERVAL_IN_MS = 100 
  const dispatch = createEventDispatcher();

  export let value = ''

	const options = {
		mode: "xml",
    htmlMode: true,
		lineNumbers: true,
    theme: 'default',
    value: value
	}

	let editor

  onMount(() => 
  { 
    setInterval(() => 
    { 
      const nextValue = editor.getValue()
      if(value !== nextValue)
      {
        value = nextValue
        dispatch('change', { value: value })
      }
    }, UPDATE_INTERVAL_IN_MS)
  }) 

</script>

<style>

  :global(.editor)
  {
    font-size: 1.5rem;
  }

  div
  {
    border: 1px solid grey;
  }

</style>

<div>
  <CodeMirror bind:editor {options} class="editor"/>
</div>


