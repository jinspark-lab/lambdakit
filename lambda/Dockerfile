FROM public.ecr.aws/lambda/nodejs:16

COPY package.json  .
RUN  npm install --target "${LAMBDA_TASK_ROOT}"

# Copy function code
COPY src/app.js ${LAMBDA_TASK_ROOT}

# Set the CMD to your handler (could also be done as a parameter override outside of the Dockerfile)
CMD [ "app.handler" ]