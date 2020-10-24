<script>
  import { autoresize_textarea } from '../../use/autoresize_textarea.js'
  let title = ''
  let description = ''
  function controlTextArea(event) {
    const { element } = event
    console.log({ element, event })
    element.style.height = '1px'
    element.style.height = 25 + element.scrollHeight + 'px'
  }
</script>

<style>
</style>

<div>
  <h4>Create poll</h4>
  <h1>Create new poll</h1>
  <form>
    <label>Title:<input type="text" bind:value={title} /></label>
    <label>
      Description:
      <textarea
        use:autoresize_textarea
        on:change={controlTextArea}
        rows="10"
        type="text"
        bind:value={description}
      />
    </label>
    <label> Title: <input type="text" bind:value={title} /> </label>
  </form>
</div>
