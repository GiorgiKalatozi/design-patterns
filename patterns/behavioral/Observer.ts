// Observer interface
interface Observer {
  update(video: Video): void;
}

// Subject (YouTube Channel)
class YouTubeChannel {
  private observers: Observer[] = [];
  private videos: Video[] = [];

  // Add observer to the list
  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  // Remove observer from the list
  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (index !== -1) {
      this.observers.splice(index, 1);
    }
  }

  // Notify all observers when a new video is uploaded
  notifyObservers(video: Video): void {
    for (const observer of this.observers) {
      observer.update(video);
    }
  }

  // Upload a new video
  uploadVideo(video: Video): void {
    this.videos.push(video);
    this.notifyObservers(video);
  }
}

// Concrete Observer (YouTube User)
class YouTubeUser implements Observer {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  // Update method is called by the subject
  update(video: Video): void {
    console.log(
      `${this.name} received a notification: New video - "${video.title}"`
    );
  }
}

// Video class
class Video {
  constructor(public title: string, public description: string) {}
}

// Client code
const youtubeChannel = new YouTubeChannel();

const user1 = new YouTubeUser("User1");
const user2 = new YouTubeUser("User2");

// Add users as observers to the YouTube channel
youtubeChannel.addObserver(user1);
youtubeChannel.addObserver(user2);

// Upload new videos
const video1 = new Video(
  "Introduction to TypeScript",
  "Learn the basics of TypeScript."
);
const video2 = new Video(
  "React Hooks Tutorial",
  "Explore React Hooks in-depth."
);

youtubeChannel.uploadVideo(video1);
youtubeChannel.uploadVideo(video2);

// Remove user1 from observers
youtubeChannel.removeObserver(user1);

// Upload another video
const video3 = new Video(
  "Node.js REST API",
  "Building a REST API with Node.js and Express."
);
youtubeChannel.uploadVideo(video3);
