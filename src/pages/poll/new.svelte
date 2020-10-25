<script>
  import { autoresize_textarea } from 'src/helpers/autoresize_textarea'
  let title = ''
  let description = ''

  function createNewPollFromForm(e) {
    console.log('hej', { title, description })
  }
</script>

<style>
</style>

<div>
  <h4>Poll</h4>
  <h1>Create new poll</h1>
  <form on:submit|preventDefault={createNewPollFromForm}>
    <label>Title:<input type="text" bind:value={title} /></label>
    <label>
      Description:
      <textarea
        use:autoresize_textarea
        rows="10"
        type="text"
        bind:value={description}
      />
    </label>
    <button type="submit">Create Poll</button>
  </form>
</div>
