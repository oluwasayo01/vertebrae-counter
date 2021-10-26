gcloud functions deploy new_weight_upload \
--runtime python39 \
--trigger-resource vertebrae \
--trigger-event google.storage.object.finalize \
--set-env-vars PROJECT_ID=counting-vertebrae,TOPIC_ID=vertebrae-weights-topic