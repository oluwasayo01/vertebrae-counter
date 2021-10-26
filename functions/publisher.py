from google.cloud import pubsub_v1
import os

publisher = pubsub_v1.PublisherClient()
project_id = os.environ.get('PROJECT_ID')
topic_id = os.environ.get('TOPIC_ID')
topic_path = publisher.topic_path(project_id, topic_id)

def publish_message(message: str) -> None:
    message = message.encode('utf-8')
    publisher.publish(topic_path, message).result()
    print(f"Published message to: {topic_path}")
