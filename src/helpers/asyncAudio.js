class AsyncAudio extends Audio {
  asyncPlay(delay) {
    return new Promise((resolve, reject) => {
      try {
        this.play();
        this.onended = () => setTimeout(() => resolve(), delay);
      } catch (error) {
        reject(error);
      }
    });
  }
}
export default AsyncAudio;
