# Refresh Materialized Views 

## Cloud Function 
- this serverless function is lined with gcloud scheduler which executes refreshing materialized views

### Helper command to deploy from local


gcloud functions deploy function --trigger-http --runtime=nodejs12 
