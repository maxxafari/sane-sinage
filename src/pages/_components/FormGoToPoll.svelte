<script>
  import { goto } from '@sveltech/routify'
  let pollId = null
  const submit = (e) => {
    $goto(`/poll/${pollId}`)
  }
  function focus(el) {
    el.focus()
  }
</script>

<form on:submit|preventDefault={submit}>
  <input
    id="pollNumber"
    name="pollNumber"
    type="text"
    bind:value={pollId}
    use:focus
  />
  <button type="submit" disabled={!pollId}>Join poll</button>
</form>
