import { Metadata } from "next";
// import Image from "next/image";
// import { PlusCircledIcon } from "@radix-ui/react-icons";

// import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { AlbumArtwork } from "./components/album-artwork";
// import { PodcastEmptyPlaceholder } from "./components/podcast-empty-placeholder";
import { Sidebar } from "./components/sidebar";
import { categories, madeForYouCategories } from "./data/categories";
import { categoryLabel } from "./data/labels";
import { DialogDemo } from "./components/dialog-demo";
import { ModalProvider } from "./components/modal-provider";

export const metadata: Metadata = {
  title: "Music App",
  description: "Example music app using the components.",
};

export default function CategoryPage() {

  return (
    <>
      {/* <div className="md:hidden">
        <Image
          src="/examples/music-light.png"
          width={1280}
          height={1114}
          alt="Music"
          className="block dark:hidden"
        />
        <Image
          src="/examples/music-dark.png"
          width={1280}
          height={1114}
          alt="Music"
          className="hidden dark:block"
        />
      </div> */}
      <div className="block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid grid-cols-4 lg:grid-cols-6">
              <div className="col-span-1">
              <Sidebar labels={categoryLabel} className="block" />
              </div>
              <div className="col-span-3 lg:col-span-5 lg:border-l">
                <div className="h-full px-2 py-6 lg:px-8">
                  <Tabs defaultValue="food" className="h-full space-y-6">
                    <div className="space-between flex items-center">
                      <TabsList>
                        <TabsTrigger value="food" className="relative">
                          Món ăn
                        </TabsTrigger>
                        <TabsTrigger value="water">Nước</TabsTrigger>
                      </TabsList>
                    </div>
                    <TabsContent
                      value="food"
                      className="border-none p-0 outline-none"
                    >
                      <ScrollArea>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">
                              Danh mục EXY
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              Lựa chọn hàng đầu dành cho bạn. Cập nhật hàng ngày.
                            </p>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="relative">
                          <ScrollArea>
                            <div className="grid grid-cols-3 lg:grid-cols-5 gap-4">
                              {categories.map((category) => (
                                <AlbumArtwork
                                  key={category.name}
                                  category={category}
                                  className="w-[250px]"
                                  aspectRatio="portrait"
                                  width={250}
                                  height={330}
                                />
                              ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                        <div className="mt-6 space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Dành cho bạn
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Dành cho cá nhân của bạn. Cập nhật hàng ngày
                          </p>
                        </div>
                        <Separator className="my-4" />
                        <div className="relative">
                          <ScrollArea>
                            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
                              {madeForYouCategories.map((category) => (
                                <AlbumArtwork
                                  key={category.name}
                                  category={category}
                                  className="w-[150px]"
                                  aspectRatio="square"
                                  width={150}
                                  height={150}
                                />
                              ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                      </ScrollArea>
                    </TabsContent>
                    <TabsContent
                      value="water"
                      className="border-none p-0 outline-none"
                    >
                      <ScrollArea>
                        <div className="flex items-center justify-between">
                          <div className="space-y-1">
                            <h2 className="text-2xl font-semibold tracking-tight">
                              Danh mục EXY
                            </h2>
                            <p className="text-sm text-muted-foreground">
                              Lựa chọn hàng đầu dành cho bạn. Cập nhật hàng ngày.
                            </p>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="relative">
                          <ScrollArea>
                            <div className="grid grid-cols-5 gap-4">
                              {categories.map((category) => (
                                <AlbumArtwork
                                  key={category.name}
                                  category={category}
                                  className="w-[250px]"
                                  aspectRatio="portrait"
                                  width={250}
                                  height={330}
                                />
                              ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                        <div className="mt-6 space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            Dành cho bạn
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Dành cho cá nhân của bạn. Cập nhật hàng ngày
                          </p>
                        </div>
                        <Separator className="my-4" />
                        <div className="relative">
                          <ScrollArea>
                            <div className="flex space-x-4 pb-4">
                              {madeForYouCategories.map((category) => (
                                <AlbumArtwork
                                  key={category.name}
                                  category={category}
                                  className="w-[150px]"
                                  aspectRatio="square"
                                  width={150}
                                  height={150}
                                />
                              ))}
                            </div>
                            <ScrollBar orientation="horizontal" />
                          </ScrollArea>
                        </div>
                      </ScrollArea>
                    </TabsContent>
                    {/* <TabsContent
                      value="water"
                      className="h-full flex-col border-none p-0 data-[state=active]:flex"
                    >
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <h2 className="text-2xl font-semibold tracking-tight">
                            New Episodes
                          </h2>
                          <p className="text-sm text-muted-foreground">
                            Your favorite podcasts. Updated daily.
                          </p>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <PodcastEmptyPlaceholder />
                    </TabsContent> */}
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
