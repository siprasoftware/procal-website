npm run build
aws s3 sync ./dist s3://procal-marketing-website --profile jimjeffers_procal
aws s3 sync ./dist s3://procal-website --profile jim_jeffers_revolution