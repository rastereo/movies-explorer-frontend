// Временный фаил, для отрисовки карточек фильмов на сайт.

const moviesData = [
  {
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: 'https://s3-alpha-sig.figma.com/img/71a2/3794/3bfd6b9af4141d2ee15e36a186b073a7?Expires=1691366400&Signature=SccAY5yIjQvGPtSAZqjZXBiQ1sFe1y2lN0p~DcYZpl7wJtei3rlTFgmQKa5JsOMkvrL3tyIlt7Bu4DqLvi-1Q0iqZMigeRuxIRRKiVuTRi3TUrnIj8JlZF6TSNgzqnGMJX7nj-X4iUsevonQU4vVS~Mj0azJ3MZPPTvaTMLzf1MEhfeMoJrWP2j4xNlmzgD4Uf8yv-G98txmWkDPJ-pDC0p8i7tx5koeJNSw2aJT-106zfrPaBhvc-JY4lXiI3pdj~Euibc1I-MxQqTshygNqrT2nf6UFXKjQusEVRIyG7-uzfCMYlFO4rO2NQqhRT79u~OKC0gNw0Z7rv~NPRmO2w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    movieId: 1,
  },
  {
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: 'https://s3-alpha-sig.figma.com/img/90ba/2e4b/e072f3f38937c7f5d592d64f3fa59f33?Expires=1691366400&Signature=a3lqAwiXd-~rKMZAHRCwGti3IAyTVj5mVgaX0BI1mjZ5zlS4YRwak1wNgFOWaHvLmE9k6edwB5OyCbcWLg0M10eu0t0UMAT67Nk~K8NhzCjJ45fm8eHA2wYgQXO0JCG8Zp9m4cO-ceDqPbCzUIbbL0BqJdm-uBdj1d0IZP0rmvJV36rca5re~56MM07FrK5V2PeJZQSM~24qR51cuNv~h6hNi-ZiCPz9-25E-Z9BWbM1c2AT8HMCVQVgKEx7Xn5OilgbHSVhwELvoyPpgUh~ZHciGvqqa9NqLjEZ03V5kSiHasta~1rs-mnYdKGApwiFZL-jwpZpzVhnj728NFsI2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    movieId: 2,
  },
  {
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: 'https://s3-alpha-sig.figma.com/img/7501/fcae/58fcf299e5a04c29cb37e6280c83da16?Expires=1691366400&Signature=clzDxjhGPgR85O1pbkEU-MEIpnw60BsS8V4e~qCUjoH3HFqrbYrfydr18yJEKmookBW610FkzkHkZe3hQZtbOTvEHk2tKOH6rbL0ua7XinzNPgd-0E6ZRDL2nay2zbx4v~l9~CsWI7ZNRZWjTp34X5~8hLyU-rXUqTuUbPU5~YNU8hqwETMEkmrWzPY9mzyJRgVBecV78bbkKALS7fix7jVSXrvBtXr9DVqElbf~q5daZZP4p2R9VUFwEn5S8f7NOpfeweEbmew6PEwYgYrtIO4syKb94q8gvV7P6fX4BOekoREx2u1myxQvSQFKPCFBOgmHtLPxmAOP72Uah3to6A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    movieId: 3,
  },
  {
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: 'https://s3-alpha-sig.figma.com/img/96cc/9d30/2e6653f8a2dbac83b4795cc1e846a243?Expires=1691366400&Signature=ZmX9-9b-d1SvIOXYpwpKTJDZ9d1uMY9EDFdyiW~zN-x3XMIcnNpSPNbSSTLNBjJRVoH9VrajsavYu0mZSVLZy0fiXRgkSjO~j3v8fnBHKJXmaaTpdciVE-Y5ewQIjJwvk5JOlDOutC-jYUV5L2KMA8-gM0gfUGIXxfCEG1zkZOoB9WQ2EhtVyK4u5LJNHdUOJQG3lOpgE~tDgbSTkSC0amSIZE09DGbdm~Be~vr~nhZf7NEdo47kwAnQV~pNKsr5Iz6q0eTIvmXf2ZmWGTsrECWmKR0ivxRd~GXOJ8y0Rk-J1X73vcFeMCKpYNP2DoeBWhz7uKvar5aE4DI476WSpA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    movieId: 4,
  },
  {
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: 'https://s3-alpha-sig.figma.com/img/b5e4/a6cb/ff07e856bc14f2c67fd3d453609875e8?Expires=1691366400&Signature=MHSToVMSKzI4qwTMbGROslktuFpZe7AUV7I0vvENX1qUji0nm621wPSThUY-8qRJj5ZIW5pg0GaYl-fEUtG3d8jw4l4fnObwVAiEhhQ6b4SBVt4qSA3gFGaa1EUTJmQDabHs7wgUlTg8be0KC2XxlEss8QfHHaPuvH33x6BlrRfdsq3p10ULCRfJmuG4FOviP4RES-EXjFjTVzYcesmixKuE9xTDLKTTVJ8czhHNpWEDByvSpdeGGxAg6JQJR8cypKQ1IQt~rGsIqasBHVnZskt5ds9yg0fY~s5SGcm7cO5Z3XzCkLH2idKBfE7pPBlwpMM4Ac2uTALEZ944g2TXpg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    movieId: 5,
  },
  {
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: 'https://s3-alpha-sig.figma.com/img/199d/35fd/ed1213c8b6d45652874df917fdcefb3b?Expires=1691366400&Signature=mQ~lfJToHObE-uOTBbA508zjrBpXXSBfw4Mx-FHRPh8lZWhhiPtAsUvyDDSOW0p4~FuQP3fzfpCaRlue3L1e4Z7SpR6XNsAvC5RFmOfnrILV7xdQFzHQ7YETpdx~Byqlyckl1HPIRVcmp7ZGL3NnBd9CbDEjUwtRl6AnfHLqybbFKb9yJwF7ooebmM-B0fnuXF18hryEvFqDHczIcN2gOKhJFsgjmA0JlWAZuLnJsEN49sQGLxa2BKUbATzcWFByAGYUSPb3B~845Ol2u2joLB0i6Wtzjd4AZwJzp~icAiTwiR8skVILH9dN8OcCo51qB9R~~rwMxlZRsuFV07Gevg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    movieId: 6,
  },
  {
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: 'https://s3-alpha-sig.figma.com/img/16ca/4833/dee0e587ee02e0b9181fbac58ce0aeee?Expires=1691366400&Signature=bsiPZP~HoKJB26YwK0wEJ0XTxW5vwti5PSSzVySRdnsS-yTYdTRipva6FtOlieW9isDsywPEe22zGSDcN206eohO75wHPL21FRgChpHIluvY0uRV6kMwpwyjerfi9scz2owAzN0s7h~WOx7xp0SUUmreFZR9VHnX2DcFyT6sLV~t3-BbiiLLw2Mri~epJDuCcOQRV~PkANKqANvgntExjzTFrJOwvpDSGdXLLdaru-5o3FFJooXCm3bjt~kwUe34zEAsie4h0rsRNIQrl~sSqJ-kFzDNQcLZHHgDAXWUTDX-G3oidaULt9n5H~Lw6z9CZuIjkrZ7W-lldcyuGxmwTQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    movieId: 7,
  },
  {
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: 'https://s3-alpha-sig.figma.com/img/db51/87fa/f8c41998d6d82176e93f868814bf1d2b?Expires=1691366400&Signature=P3KG5wHL5Zb98FiBwqeWkD8oerKOL3cD4jSlrZYDX7-a8NNTBa4IBkt~fQs1zfmBucuYOkKIzpLq2Ge2gbRVHyk2JTPrq1diTCO1MJX-Frulfk3WC1PnpS75cROQhMvLd-i003xxd10i~VIaAzj0B8c~ExIjFX7glhO-zX8EHWJMQOM3MXx8yYqb1D2ayf9coj1hkJftyLS1PnZzN38ND8ApFeyb7Hm~8zq8fwVJ7PjEWzyKdTfXc2yEYayJG-MpOz1TsPVP~kPQs0Rd8YgqbynY-PwFY5f3JUcVhqS4LRLvBEH12tu5S36yClDGtym65xRuwn4yRbkT1gR-AGTK6Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    movieId: 8,
  },
  {
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: 'https://s3-alpha-sig.figma.com/img/8604/c3a8/492a130e904f2edf96264863e930e51f?Expires=1691366400&Signature=BhCMT7Hisi3LHjEt1bw4PYzRqxysF97TyRXY5JJsQmzUoY4Hm~Niw1sZMKyCy9xioyyKphwC9i1e~RvbTh86XshAoYijoutZQ28eSeXKULwjF5XMNistXcJK3cQosHcWzXip4EasuP1PzhrKVztrI7jLjH97ZGFiNGV0CcWsPnS69OVQGUQXu~2Plx5eVhUvtMROXXvhQopbIGZhdtOTAfFImk0h8HojagI-O5aBxnnKpzxyhm7sqQgYbGlqjHkFS102hULKfsgIgovAbgBQ6B2iTrrl~wAcb1e91AYr0sbx7kWIgTcNULJ7tU4cqghUNX2axG6-DMnDIU9cS~~41w__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    movieId: 9,
  },
  {
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: 'https://s3-alpha-sig.figma.com/img/532b/0b33/a7e2023e9428929e8632172735ff18f5?Expires=1691366400&Signature=U3eP9hj5we~PH0lb0wG0Yq7Uc8DngzwDBK416BPSV6XA5i5fa5ivMOHe97GTmxNmvoX5ao1g1iDAyBwc4Q~Ba4xsoFMsuRPy4WtnFSSdS9Qauc7DL~OcqReDjGwMfW~QQHIWb9g7Yup13NezXsmOI3xP6qWpXtualpMKWfhH8NRLVlEIyKVChSeTybEMihN9352UuWW~KFAQMFCSO2KfGRqOvolalssPWBFz8JmWCqQemCbHb3aCK9qBAYsobi2G0Glfzgg5b~cSqatHRKvhJzXcIsAqwIo7qRMDlCJx-AqKP0DXaZCvSDj8j3-tScdYxQ-vVNqV78yWKWhNG6qyNg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    movieId: 10,
  },
  {
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: 'https://s3-alpha-sig.figma.com/img/ff18/63df/9c469b036f5505dd9a947241f21f8245?Expires=1691366400&Signature=QuJ-nsCD1uCiZD6opftyFvz9mSUZJJGT7wIcfG988uNHhx6u78OWab6yspU~yczAK4jEBJvlXzD4Z-Ef3IPAWaNdouprbh4zPq5gJLQZo65C0Uk~4kL1uxWapFWkEqxVtwKob0nw6EWbpbJyquVu5tz-5dF7miAJcz8TqChynMb~RpjE5J5~homkJssHYewyKS4C46EH9gb5WdmfE9gtaqJAgqiNjVt4SOaNgiUN994iN6KYkfq6Dcd9h2-hNaWgjsFDAgtnpzzrrDnT1LRIdmKwhRRrscnzL8aoEMHA-zvCezwDpTczvfpzPCXlmlYScVOZ560rZQG5AVzb0~XtGw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    movieId: 11,
  },
  {
    nameRU: '33 слова о дизайне',
    duration: '1ч 47м',
    image: 'https://s3-alpha-sig.figma.com/img/9f37/4383/9cbecda3e33558c8bfcc052f8002c008?Expires=1691366400&Signature=qjWBD~p~OUsy9SwyaK~mkaW0Bsj2VWCdTLaaGF8oVcrnV5Jj0YPih92UAn51KdPejAZYn1M6jaIieHBRmQhH2DLuRjRE7BsyLZvdxo13-az0HvS-BFcbd5B7lRD496mhmYgD2Zns7JHgdiVAFfFk~EIl9WOdiUvwlzVfRZzAgsFXvn3ZCFNfAh6CJ5rk6Im0LdqN6ZKALti4dnk9Cm6wX~YX9XzoyDUweqISW9NXBsnOqYUttkGxGkYgTQ19jWWIfVf5kHkGfhUmQvcpeile5nNtIzNfVIx13JHfX3ceL-~glTYfqCFXAu3lDNpLkG85JSU4CcBKFzOICfMLnPHvaQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4',
    movieId: 12,
  },
];

export default moviesData;
