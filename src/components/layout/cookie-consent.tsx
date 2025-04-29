"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogFooter } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function CookieConsent() {
  const [open, setOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("consent");

  const handleAcceptAll = () => {
    console.log("All cookies accepted");
    setOpen(false);
  };

  const handleAcceptSelected = () => {
    console.log("Selected cookies accepted");
    setOpen(false);
  };

  const handleAcceptNecessary = () => {
    console.log("Only necessary cookies accepted");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[600px] p-0 bg-white">
        <div className="flex items-center justify-between p-4 border-b">
          <Image
            src="/images/neura-logo.svg"
            alt="Neura Robotics"
            width={100}
            height={24}
            className="h-7 w-auto"
          />
          <Image
            src="https://ext.same-assets.com/2800409186/3783633550.svg"
            alt="Cookiebot"
            width={100}
            height={30}
          />
        </div>

        <Tabs defaultValue="consent" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-3 h-auto p-0 bg-transparent">
            <TabsTrigger
              value="consent"
              className={cn(
                "py-4 rounded-none border-b-2 data-[state=active]:border-neura-blue data-[state=inactive]:border-transparent"
              )}
            >
              Consent
            </TabsTrigger>
            <TabsTrigger
              value="details"
              className={cn(
                "py-4 rounded-none border-b-2 data-[state=active]:border-neura-blue data-[state=inactive]:border-transparent"
              )}
            >
              Details
            </TabsTrigger>
            <TabsTrigger
              value="about"
              className={cn(
                "py-4 rounded-none border-b-2 data-[state=active]:border-neura-blue data-[state=inactive]:border-transparent"
              )}
            >
              About
            </TabsTrigger>
          </TabsList>

          <TabsContent value="consent" className="p-6">
            <h2 className="text-lg font-semibold mb-2">This website uses cookies</h2>
            <p className="text-sm text-gray-600 mb-6">
              We use cookies to personalise content and ads, to provide social media features and to
              analyse our traffic. We also share information about your use of our site with our
              social media, advertising and analytics partners who may combine it with other
              information that you've provided to them or that they've collected from your use of
              their services.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between">
                <span className="font-medium">Necessary</span>
                <div className="w-12 h-6 rounded-full bg-gray-200 flex items-center justify-start p-1">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium">Preferences</span>
                <div className="w-12 h-6 rounded-full bg-neura-blue flex items-center justify-end p-1">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium">Statistics</span>
                <div className="w-12 h-6 rounded-full bg-neura-blue flex items-center justify-end p-1">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="font-medium">Marketing</span>
                <div className="w-12 h-6 rounded-full bg-neura-blue flex items-center justify-end p-1">
                  <div className="w-4 h-4 rounded-full bg-white" />
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="details" className="p-6">
            <h2 className="text-lg font-semibold mb-4">Cookie Details</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Necessary cookies</h3>
                <p className="text-sm text-gray-600">
                  Necessary cookies help make a website usable by enabling basic functions like page navigation and
                  access to secure areas of the website. The website cannot function properly without these cookies.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Preference cookies</h3>
                <p className="text-sm text-gray-600">
                  Preference cookies enable a website to remember information that changes the way the
                  website behaves or looks, like your preferred language or the region that you are in.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Statistics cookies</h3>
                <p className="text-sm text-gray-600">
                  Statistic cookies help website owners to understand how visitors interact with websites by
                  collecting and reporting information anonymously.
                </p>
              </div>

              <div>
                <h3 className="font-medium mb-2">Marketing cookies</h3>
                <p className="text-sm text-gray-600">
                  Marketing cookies are used to track visitors across websites. The intention is to display ads
                  that are relevant and engaging for the individual user and thereby more valuable for publishers
                  and third party advertisers.
                </p>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="about" className="p-6">
            <h2 className="text-lg font-semibold mb-4">About Cookies</h2>
            <p className="text-sm text-gray-600 mb-4">
              Cookies are small text files that can be used by websites to make a user's experience more efficient.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              The law states that we can store cookies on your device if they are strictly necessary for the
              operation of this site. For all other types of cookies we need your permission.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              This site uses different types of cookies. Some cookies are placed by third party services
              that appear on our pages.
            </p>
            <p className="text-sm text-gray-600 mb-4">
              You can at any time change or withdraw your consent from the Cookie Declaration on our website.
            </p>
            <p className="text-sm text-gray-600">
              Learn more about who we are, how you can contact us and how we process personal data in our Privacy Policy.
            </p>
          </TabsContent>
        </Tabs>

        <DialogFooter className="bg-gray-50 p-4">
          {activeTab === "consent" && (
            <div className="flex w-full justify-between gap-4">
              <button
                onClick={handleAcceptNecessary}
                className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium"
              >
                Use necessary cookies only
              </button>
              <button
                onClick={handleAcceptSelected}
                className="flex-1 px-4 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium"
              >
                Allow selection
              </button>
              <button
                onClick={handleAcceptAll}
                className="flex-1 px-4 py-2 bg-neura-blue text-white rounded-md text-sm font-medium"
              >
                Allow all cookies
              </button>
            </div>
          )}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
