export const poll_123 = {
  id: '123',
  title: 'Create polling system',
  description: 'We have to create a polling system in svelte',
  votes: [
    {
      name: 'Max',
      voredFor: 8,
      timeStamp: new Date(),
    },
    {
      name: 'Olga',
      voredFor: 5.5,
      timeStamp: new Date() - 3600,
    },
  ],
}