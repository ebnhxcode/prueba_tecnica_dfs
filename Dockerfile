FROM alpine:3.15

# Working directory
ARG DIRECTORY_PROJECT=/var/www/app
WORKDIR $DIRECTORY_PROJECT

# Install packages
RUN apk --no-cache --update add \
  nginx supervisor curl vim nano bash wget htop grep git apk-tools

# Replace sysctl.conf for network tunning
COPY dockerfiles/conf.d/sysctl.conf /etc/sysctl.conf

# Configure nginx
COPY dockerfiles/conf.d/nginx.conf /etc/nginx/nginx.conf

# Configure supervisord
COPY dockerfiles/conf.d/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Make entry point
COPY dockerfiles/bin.d/entry-point.sh /usr/local/bin/entry-point
RUN chmod +x /usr/local/bin/entry-point

# Copy APP
RUN mkdir -p /var/www/app
COPY builded/ /var/www/app/

# Make sure files/folders needed by the processes are accessable when they run under the nobody user
# RUN chown -R nobody.nobody /run && \
#   chown -R nobody.nobody /var/lib/nginx && \
#   chown -R nobody.nobody /var/tmp/nginx && \
#   chown -R nobody.nobody /var/log/nginx

# Expose the port
EXPOSE 80

# Launch startup script
ENTRYPOINT ["entry-point"]