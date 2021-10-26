from publisher import publish_message

def new_weight_upload(event, context):
    print(f"Context ID: {context.event_id}")
    print(f"Event Type: {context.event_type} ")
    print(f"All Event: {event}")
    print(f"All Context: {context}")
    publish_message(f"Hello First upload: {event['name']} \n {event}")