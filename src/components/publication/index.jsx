import { Fragment } from 'react';
import { ga, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';
import PropTypes from 'prop-types';

const Publication = ({ loading, googleAnalytics }) => {
  const renderArticles = () => {
    return (<a className="card shadow-lg compact bg-base-100 cursor-pointer"
          key={1}
          href={"https://flippingbook.lehigh.edu/Perspectives-on-Business-and-Economics,-Vol.-40/30/"}
          onClick={(e) => {
            e.preventDefault();

            try {
              if (googleAnalytics?.id) {
                ga.event({
                  action: 'Click Publication',
                  params: {
                    post: "Martindale",
                  },
                });
              }
            } catch (error) {
              console.error(error);
            }

            window?.open("https://flippingbook.lehigh.edu/Perspectives-on-Business-and-Economics,-Vol.-40/30/", '_blank');
          }}
        >
          <div className="p-8 h-full w-full">
            <div className="flex items-center flex-col md:flex-row">
              <div className="avatar mb-5 md:mb-0 opacity-90">
                <div className="w-24 h-24 mask mask-squircle">
                  <LazyImage
                    src={"https://preserve.lib.lehigh.edu/sites/preserve/files/styles/islandora_imagecache_image_style_medium/public/externals/71c9c9d1c7cffcafba291d6cdee6336b.jpg?itok=BPnJ2gwM&solr_nav%5Bid%5D=5f461bdc9136135c45a3&solr_nav%5Bpage%5D=0&solr_nav%5Boffset%5D=39"}
                    alt={'thumbnail'}
                    placeholder={skeleton({
                      width: 'w-full',
                      height: 'h-full',
                      shape: '',
                    })}
                  />
                </div>
              </div>
              <div className="w-full">
                <div className="flex items-start px-4">
                  <div className="text-center md:text-left w-full">
                    <h2 className="font-semibold text-base-content opacity-60">
                      The Digital Divide: Internet in Alaska
                    </h2>
                    <p className="text-base-content opacity-50 text-xs">
                      <i>Perspectives on Business and Economics</i>, Vol. 40, 2022
                    </p>
                    <p className="mt-3 text-base-content text-opacity-60 text-sm">
                    Alaska faces great challenges, given its geography and sparse population, that limit the development of broadband technology throughout the state. With internet connectivity growing more important for education, business, and communication, its development is vital for Alaska’s future success. This article examines the current state of broadband technology in Alaska and the plans proposed by the government and private organizations to solve the internet connectivity problem.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>);
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div
              className={`card compact bg-base-100 ${
                loading || 'shadow bg-opacity-40'
              }`}
            >
              <div className="card-body">
                <div className="mx-3 mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ width: 'w-28', height: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        Publications
                      </span>
                    )}
                  </h5>
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 gap-6">
                    {loading || renderArticles()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

Publication.propTypes = {
  loading: PropTypes.bool.isRequired,
  googleAnalytics: PropTypes.object.isRequired,
};

export default Publication;
