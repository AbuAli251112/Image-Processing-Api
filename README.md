  "scripts": {
    "lint": "eslint . --ext .ts",
    "prettier": "prettier --config .prettierrc src/**/*.ts --write",
    "build": "npx tsc",
    "start": "nodemon src/index.ts",
    "jasmine": "jasmine",
    "test": "npm run build && npm run jasmine"
  }

Endpoint to resize images :
http://localhost:3000/api/images

QueryParameters:

1-filename: (Without Extension)
    a-encenadaport
    b-fjord
    c-icelandwaterfall
    d-palmtunnel
    e-santamonica

2-width
3-height

-- Images Are In Images/full
-- After Resizing. Images Are Stored In Images/thumb