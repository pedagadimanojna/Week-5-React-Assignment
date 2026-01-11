export const fetchSongsByGenre = async (genre) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 1,
          title: 'Sample Song',
          artist: 'Sample Artist',
          image: 'https://placehold.co/300x300',
          url: 'https://samplelib.com/lib/preview/mp3/sample-3s.mp3',
        },
        {
          id: 2,
          title: 'Second Song',
          artist: 'Another Artist',
          image: 'https://placehold.co/300x300',
          url: 'https://samplelib.com/lib/preview/mp3/sample-6s.mp3',
        },
      ]);
    }, 1000);
  });
};
