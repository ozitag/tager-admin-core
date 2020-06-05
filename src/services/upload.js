import api from '@/services/api';
import RequestError from '@/services/RequestError';

export function uploadFile({ scenario, file, onProgress }) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.upload.addEventListener('progress', event => {
      if (onProgress) {
        onProgress({
          event,
          loaded: event.loaded,
          total: event.total,
          progress: event.loaded / event.total
        });
      }
    });

    request.addEventListener('loadend', event => {
      const isOk = request.status >= 200 && request.status < 300;

      if (isOk) {
        try {
          const responseBody = JSON.parse(request.response);
          resolve(responseBody);
        } catch (error) {
          resolve(request.response);
        }
      } else {
        reject(
          new RequestError(
            { code: request.status, text: request.statusText },
            request.response
          )
        );
      }
    });

    const formData = new FormData();
    formData.append('file', file);

    const query = `?scenario=${scenario ?? 'default'}`;

    request.open(
      'POST',
      'https://presetbox.dev.ozitag.com/api/admin/upload' + query
    );

    const accessToken = api.getAccessToken();
    if (accessToken) {
      request.setRequestHeader('Authorization', `Bearer ${accessToken}`);
    }

    // request.withCredentials = true;
    request.send(formData);
  });
}
