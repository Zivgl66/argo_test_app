# argo-test-app

Sample application for testing ArgoCD deployments.

## Local Development

```bash
npm install
npm start
```

## Endpoints

- `GET /` - App info
- `GET /health` - Health check

## Deployment

This app is deployed via ArgoCD through the gitops repository.
The `platform.yaml` file configures the CI pipeline to build and push the Helm chart and container image.
