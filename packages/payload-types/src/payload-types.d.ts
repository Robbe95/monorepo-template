/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnBlocks".
 */
export type ColumnBlocks =
  | {
      block?: (ColumnMultipleTextBlock | ColumnTextCtaBlock)[] | null;
      id?: string | null;
    }[]
  | null;
/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    pages: Page;
    'form-hubspot': FormHubspot;
    users: User;
    addresses: Address;
    images: Image;
    icons: Icon;
    tenants: Tenant;
    blogs: Blog;
    'payload-jobs': PayloadJob;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    pages: PagesSelect<false> | PagesSelect<true>;
    'form-hubspot': FormHubspotSelect<false> | FormHubspotSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    addresses: AddressesSelect<false> | AddressesSelect<true>;
    images: ImagesSelect<false> | ImagesSelect<true>;
    icons: IconsSelect<false> | IconsSelect<true>;
    tenants: TenantsSelect<false> | TenantsSelect<true>;
    blogs: BlogsSelect<false> | BlogsSelect<true>;
    'payload-jobs': PayloadJobsSelect<false> | PayloadJobsSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    settings: Setting;
  };
  globalsSelect: {
    settings: SettingsSelect<false> | SettingsSelect<true>;
  };
  locale: 'en' | 'nl' | 'fr';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: {
      exampleTask: ExampleTask;
      schedulePublish: TaskSchedulePublish;
      inline: {
        input: unknown;
        output: unknown;
      };
    };
    workflows: {
      exampleWorkflow: ExampleWorkflow;
    };
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages".
 */
export interface Page {
  id: string;
  title: string;
  slug?: string | null;
  slugLock?: boolean | null;
  blocks?:
    | (HeroBlock | TextBlock | ColumnBlock | HubspotFormBlock | ImageTextBlock | CarouselBlock | BannerBlock)[]
    | null;
  seo?: {
    title?: string | null;
    description?: string | null;
    /**
     * Maximum upload file size: 12MB. Recommended file size for images is <500KB.
     */
    image?: (string | null) | Image;
  };
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock".
 */
export interface HeroBlock {
  title: string;
  text: string;
  ctas?:
    | {
        cta: {
          label: string;
          ctaVariant?: ('primary' | 'secondary') | null;
          ctaType?: ('link' | 'event') | null;
          link?: LinkField;
          event?: 'some_form' | null;
        };
        id?: string | null;
      }[]
    | null;
  backgroundImage: string | Image;
  id?: string | null;
  blockName?: string | null;
  blockType: 'hero';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkField".
 */
export interface LinkField {
  type?: ('reference' | 'custom') | null;
  newTab?: boolean | null;
  reference?: {
    relationTo: 'pages';
    value: string | Page;
  } | null;
  url?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images".
 */
export interface Image {
  id: string;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
  sizes?: {
    thumbnail?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    card?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    tablet?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    desktop?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    background?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TextBlock".
 */
export interface TextBlock {
  title: string;
  text: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'text';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnBlock".
 */
export interface ColumnBlock {
  columns?: ColumnBlocks;
  id?: string | null;
  blockName?: string | null;
  blockType: 'column';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnMultipleTextBlock".
 */
export interface ColumnMultipleTextBlock {
  texts: {
    subtitle: string;
    text: string;
    id?: string | null;
  }[];
  ctas?:
    | {
        cta: {
          label: string;
          ctaVariant?: ('primary' | 'secondary') | null;
          ctaType?: ('link' | 'event') | null;
          link?: LinkField;
          event?: 'some_form' | null;
        };
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'columnMultipleText';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnTextCtaBlock".
 */
export interface ColumnTextCtaBlock {
  title: string;
  text: string;
  ctas?:
    | {
        cta: {
          label: string;
          ctaVariant?: ('primary' | 'secondary') | null;
          ctaType?: ('link' | 'event') | null;
          link?: LinkField;
          event?: 'some_form' | null;
        };
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'columnTextCta';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HubspotFormBlock".
 */
export interface HubspotFormBlock {
  hubspotForm: string | FormHubspot;
  id?: string | null;
  blockName?: string | null;
  blockType: 'hubspot-form';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-hubspot".
 */
export interface FormHubspot {
  id: string;
  title: string;
  formId: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ImageTextBlock".
 */
export interface ImageTextBlock {
  title: string;
  text: string;
  id?: string | null;
  blockName?: string | null;
  blockType: 'image-text';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CarouselBlock".
 */
export interface CarouselBlock {
  images: (string | Image)[];
  id?: string | null;
  blockName?: string | null;
  blockType: 'carousel';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BannerBlock".
 */
export interface BannerBlock {
  title: string;
  text: string;
  icon: string | Icon;
  ctas?:
    | {
        cta: {
          label: string;
          ctaVariant?: ('primary' | 'secondary') | null;
          ctaType?: ('link' | 'event') | null;
          link?: LinkField;
          event?: 'some_form' | null;
        };
        id?: string | null;
      }[]
    | null;
  id?: string | null;
  blockName?: string | null;
  blockType: 'banner';
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "icons".
 */
export interface Icon {
  id: string;
  alt?: string | null;
  content?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  title?: string | null;
  role: 'super-admin' | 'user' | 'admin' | 'editor' | 'developer';
  addresses?: (string | Address)[] | null;
  tenants?:
    | {
        tenant: string | Tenant;
        roles: ('tenant-admin' | 'tenant-viewer')[];
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "addresses".
 */
export interface Address {
  id: string;
  label: string;
  street: string;
  number: string;
  box?: string | null;
  postal_code: string;
  city: string;
  region?: string | null;
  country: string;
  email?: string | null;
  phone?: string | null;
  type?: ('billing' | 'shipping')[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tenants".
 */
export interface Tenant {
  id: string;
  title: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogs".
 */
export interface Blog {
  id: string;
  tenant?: (string | null) | Tenant;
  title: string;
  slug: string;
  blog: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-jobs".
 */
export interface PayloadJob {
  id: string;
  /**
   * Input data provided to the job
   */
  input?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  taskStatus?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  completedAt?: string | null;
  totalTried?: number | null;
  /**
   * If hasError is true this job will not be retried
   */
  hasError?: boolean | null;
  /**
   * If hasError is true, this is the error that caused it
   */
  error?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  /**
   * Task execution log
   */
  log?:
    | {
        executedAt: string;
        completedAt: string;
        taskSlug: 'inline' | 'exampleTask' | 'schedulePublish';
        taskID: string;
        input?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        output?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        state: 'failed' | 'succeeded';
        error?:
          | {
              [k: string]: unknown;
            }
          | unknown[]
          | string
          | number
          | boolean
          | null;
        id?: string | null;
      }[]
    | null;
  workflowSlug?: 'exampleWorkflow' | null;
  taskSlug?: ('inline' | 'exampleTask' | 'schedulePublish') | null;
  queue?: string | null;
  waitUntil?: string | null;
  processing?: boolean | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'pages';
        value: string | Page;
      } | null)
    | ({
        relationTo: 'form-hubspot';
        value: string | FormHubspot;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'addresses';
        value: string | Address;
      } | null)
    | ({
        relationTo: 'images';
        value: string | Image;
      } | null)
    | ({
        relationTo: 'icons';
        value: string | Icon;
      } | null)
    | ({
        relationTo: 'tenants';
        value: string | Tenant;
      } | null)
    | ({
        relationTo: 'blogs';
        value: string | Blog;
      } | null)
    | ({
        relationTo: 'payload-jobs';
        value: string | PayloadJob;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "pages_select".
 */
export interface PagesSelect<T extends boolean = true> {
  title?: T;
  slug?: T;
  slugLock?: T;
  blocks?:
    | T
    | {
        hero?: T | HeroBlockSelect<T>;
        text?: T | TextBlockSelect<T>;
        column?: T | ColumnBlockSelect<T>;
        'hubspot-form'?: T | HubspotFormBlockSelect<T>;
        'image-text'?: T | ImageTextBlockSelect<T>;
        carousel?: T | CarouselBlockSelect<T>;
        banner?: T | BannerBlockSelect<T>;
      };
  seo?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HeroBlock_select".
 */
export interface HeroBlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  ctas?:
    | T
    | {
        cta?:
          | T
          | {
              label?: T;
              ctaVariant?: T;
              ctaType?: T;
              link?: T | LinkFieldSelect<T>;
              event?: T;
            };
        id?: T;
      };
  backgroundImage?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "LinkField_select".
 */
export interface LinkFieldSelect<T extends boolean = true> {
  type?: T;
  newTab?: T;
  reference?: T;
  url?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TextBlock_select".
 */
export interface TextBlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnBlock_select".
 */
export interface ColumnBlockSelect<T extends boolean = true> {
  columns?: T | ColumnBlocksSelect<T>;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnBlocks_select".
 */
export interface ColumnBlocksSelect<T extends boolean = true> {
  block?:
    | T
    | {
        columnMultipleText?: T | ColumnMultipleTextBlockSelect<T>;
        columnTextCta?: T | ColumnTextCtaBlockSelect<T>;
      };
  id?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnMultipleTextBlock_select".
 */
export interface ColumnMultipleTextBlockSelect<T extends boolean = true> {
  texts?:
    | T
    | {
        subtitle?: T;
        text?: T;
        id?: T;
      };
  ctas?:
    | T
    | {
        cta?:
          | T
          | {
              label?: T;
              ctaVariant?: T;
              ctaType?: T;
              link?: T | LinkFieldSelect<T>;
              event?: T;
            };
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ColumnTextCtaBlock_select".
 */
export interface ColumnTextCtaBlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  ctas?:
    | T
    | {
        cta?:
          | T
          | {
              label?: T;
              ctaVariant?: T;
              ctaType?: T;
              link?: T | LinkFieldSelect<T>;
              event?: T;
            };
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "HubspotFormBlock_select".
 */
export interface HubspotFormBlockSelect<T extends boolean = true> {
  hubspotForm?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ImageTextBlock_select".
 */
export interface ImageTextBlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "CarouselBlock_select".
 */
export interface CarouselBlockSelect<T extends boolean = true> {
  images?: T;
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "BannerBlock_select".
 */
export interface BannerBlockSelect<T extends boolean = true> {
  title?: T;
  text?: T;
  icon?: T;
  ctas?:
    | T
    | {
        cta?:
          | T
          | {
              label?: T;
              ctaVariant?: T;
              ctaType?: T;
              link?: T | LinkFieldSelect<T>;
              event?: T;
            };
        id?: T;
      };
  id?: T;
  blockName?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "form-hubspot_select".
 */
export interface FormHubspotSelect<T extends boolean = true> {
  title?: T;
  formId?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  title?: T;
  role?: T;
  addresses?: T;
  tenants?:
    | T
    | {
        tenant?: T;
        roles?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "addresses_select".
 */
export interface AddressesSelect<T extends boolean = true> {
  label?: T;
  street?: T;
  number?: T;
  box?: T;
  postal_code?: T;
  city?: T;
  region?: T;
  country?: T;
  email?: T;
  phone?: T;
  type?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "images_select".
 */
export interface ImagesSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
  sizes?:
    | T
    | {
        thumbnail?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        card?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        tablet?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        desktop?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        background?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "icons_select".
 */
export interface IconsSelect<T extends boolean = true> {
  alt?: T;
  content?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tenants_select".
 */
export interface TenantsSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blogs_select".
 */
export interface BlogsSelect<T extends boolean = true> {
  tenant?: T;
  title?: T;
  slug?: T;
  blog?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-jobs_select".
 */
export interface PayloadJobsSelect<T extends boolean = true> {
  input?: T;
  taskStatus?: T;
  completedAt?: T;
  totalTried?: T;
  hasError?: T;
  error?: T;
  log?:
    | T
    | {
        executedAt?: T;
        completedAt?: T;
        taskSlug?: T;
        taskID?: T;
        input?: T;
        output?: T;
        state?: T;
        error?: T;
        id?: T;
      };
  workflowSlug?: T;
  taskSlug?: T;
  queue?: T;
  waitUntil?: T;
  processing?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings".
 */
export interface Setting {
  id: string;
  socials?: {
    socials?:
      | {
          social: Social;
          id?: string | null;
        }[]
      | null;
  };
  hubspot?: {
    portalId?: string | null;
    accessToken?: string | null;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Social".
 */
export interface Social {
  name?: string | null;
  url?: string | null;
  icon: string | Icon;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "settings_select".
 */
export interface SettingsSelect<T extends boolean = true> {
  socials?:
    | T
    | {
        socials?:
          | T
          | {
              social?: T | SocialSelect<T>;
              id?: T;
            };
      };
  hubspot?:
    | T
    | {
        portalId?: T;
        accessToken?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "Social_select".
 */
export interface SocialSelect<T extends boolean = true> {
  name?: T;
  url?: T;
  icon?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ExampleTask".
 */
export interface ExampleTask {
  input: {
    title: string;
  };
  output: {
    title: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "TaskSchedulePublish".
 */
export interface TaskSchedulePublish {
  input: {
    type?: ('publish' | 'unpublish') | null;
    locale?: string | null;
    doc?: {
      relationTo: 'pages';
      value: string | Page;
    } | null;
    global?: string | null;
    user?: (string | null) | User;
  };
  output?: unknown;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "ExampleWorkflow".
 */
export interface ExampleWorkflow {
  input: {
    title: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}